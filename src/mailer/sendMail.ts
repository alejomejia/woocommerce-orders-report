import { transporter } from './transporter.js';
import { EMAIL_RECEIVER, EMAIL_RECEIVERS, EMAIL_SENDER } from './const.js';
import { EmailContext } from './types.js';
import { getHtmlOrders } from './html/getHtmlOrders.js';
import { getHtmlNoOrders } from './html/getHtmlNoOrders.js';

import { logger } from '../utils/logger.js';
import { createExcelFilename } from '../files/createExcelFilename.js';
import { TEMP_DIR_NAME } from '../files/const.js';
import { getCurrentDate } from '../utils/getCurrentDate.js';

type SendMailArgs = {
  context: EmailContext;
  ordersCount?: number;
};

type EmailHtml = {
  [key in EmailContext]: string;
};

const DEBUG_MODE = false;

export const sendMail = async ({
  context,
  ordersCount,
}: SendMailArgs): Promise<void> => {
  if (DEBUG_MODE) {
    return;
  }

  const currentDate = getCurrentDate('LLLL ee yyyy');
  const filename = createExcelFilename();

  logger.info('Sending email...');

  const emailHtml: EmailHtml = {
    orders: getHtmlOrders(ordersCount),
    noOrders: getHtmlNoOrders(),
  };

  try {
    await transporter.sendMail({
      from: EMAIL_SENDER,
      to: EMAIL_RECEIVER,
      cc: EMAIL_RECEIVERS,
      subject: `Orders report - ${currentDate}`,
      html: emailHtml[context],
      attachments: [
        {
          filename,
          path: `${TEMP_DIR_NAME}/${filename}`,
        },
      ],
    });

    logger.success('Email sent!');
  } catch (e) {
    logger.error(`Error sending email: ${e}`);
  }
};

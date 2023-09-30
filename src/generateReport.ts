import { logger } from './utils/logger.js';

import { getDailyWoocommerceOrders } from './services/getDailyWoocommerceOrders.js';
import { createExcelFile } from './files/createExcelFile.js';
import { sendMail } from './mailer/sendMail.js';

export const generateReport = async () => {
  try {
    const dailyWoocommerceOrders = await getDailyWoocommerceOrders();
    const ordersCount = dailyWoocommerceOrders.length;

    if (Boolean(ordersCount)) {
      createExcelFile(dailyWoocommerceOrders);
      await sendMail({
        context: 'orders',
        ordersCount,
      });
    } else {
      await sendMail({
        context: 'noOrders',
      });
    }
  } catch (e) {
    logger.error(String(e));
  }
};

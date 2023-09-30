import 'dotenv/config';

import { logger } from './utils/logger.js';

import { getDailyWoocommerceOrders } from './services/getDailyWoocommerceOrders.js';
import { createExcelFile } from './files/createExcelFile.js';
import { sendMail } from './mailer/sendMail.js';

async function App() {
  try {
    const dailyWoocommerceOrders = await getDailyWoocommerceOrders();
    const ordersCount = dailyWoocommerceOrders.length;

    if (Boolean(ordersCount)) {
      createExcelFile(dailyWoocommerceOrders);
      sendMail({
        context: 'orders',
        ordersCount,
      });
    } else {
      sendMail({
        context: 'noOrders',
      });
    }
  } catch (e) {
    logger.error(String(e));
  }
}

App();

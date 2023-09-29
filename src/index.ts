import 'dotenv/config';

import { getDailyWoocommerceOrders } from './services/getDailyWoocommerceOrders.js';
import { createExcelFile } from './files/createExcelFile.js';

async function App() {
  try {
    const dailyWoocommerceOrders = await getDailyWoocommerceOrders();

    const hasDailyOrders = Boolean(dailyWoocommerceOrders.length);
    if (hasDailyOrders) {
      createExcelFile(dailyWoocommerceOrders);
    }
  } catch (e) {
    console.error(e);
  }
}

App();

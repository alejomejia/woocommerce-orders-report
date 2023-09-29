import 'dotenv/config';

import { getDailyWoocommerceOrders } from './services/getDailyWoocommerceOrders.js';

const dailyWoocommerceOrders = await getDailyWoocommerceOrders();

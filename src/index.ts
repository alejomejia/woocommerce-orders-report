import 'dotenv/config';
import { scheduleJob } from 'node-schedule';

import { logger } from './utils/logger.js';
import { EMAIL_RECEIVER } from './mailer/const.js';

import { generateReport } from './generateReport.js';

function App() {
  scheduleJob('send-report', '59 23 * * *', async () => {
    await generateReport();
    logger.success(`Report generated and sent to: ${EMAIL_RECEIVER}`);
  });
}

App();

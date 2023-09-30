import * as fs from 'fs';
import * as xlsx from 'xlsx';

import { createExcelFilename } from './createExcelFilename.js';
import { EXCEL_HEADERS, TEMP_DIR_NAME } from './const.js';

import { logger } from '../utils/logger.js';
import { Order } from '../types.js';

type CreateExcelFile = (orders: Order[]) => void;

export const createExcelFile: CreateExcelFile = async (orders) => {
  xlsx.set_fs(fs);

  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet(orders);

  const filename = createExcelFilename();

  if (!fs.existsSync(TEMP_DIR_NAME)) {
    fs.mkdirSync(TEMP_DIR_NAME);
  }

  const path = `${TEMP_DIR_NAME}/${filename}`;

  // const maxWidth = orders.reduce((max, order) => Math.max(max, order.products.length), 10)
  // worksheet['!cols'] = [{ wch: maxWidth }]

  logger.info('Creating excel file...');

  // Add worksheet tab name
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Pedidos');

  // Update column names
  xlsx.utils.sheet_add_aoa(worksheet, [EXCEL_HEADERS], { origin: 'A1' });

  xlsx.writeFile(workbook, path, { compression: true });

  logger.success('Excel file created!');
};

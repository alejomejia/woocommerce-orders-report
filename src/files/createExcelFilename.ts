import { FILENAME } from './const.js';

import { getCurrentDate } from '../utils/getCurrentDate.js';

type CreateExcelFilename = () => string;

export const createExcelFilename: CreateExcelFilename = () => {
  const currentDate = getCurrentDate('LLLL-dd-yyyy');
  return `${FILENAME}-${currentDate}.xlsx`;
};

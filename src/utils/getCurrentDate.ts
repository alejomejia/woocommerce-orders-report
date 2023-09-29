import { addHours } from 'date-fns';

import { formatDate } from './formatDate.js';

type GetCurrentDate = (format?: string) => string;

export const getCurrentDate: GetCurrentDate = (
  format = "yyyy-MM-dd'T'00:00:00"
) => {
  const currentColombiaDate = addHours(new Date(), -5);

  return formatDate(currentColombiaDate, format);
};

import { format } from 'date-fns';

type FormatDate = (date: Date, dateFormat: string) => string;

export const formatDate: FormatDate = (date, dateFormat) => {
  return format(date, dateFormat);
};

import { WORDPRESS_BASE_URL, ORDERS_PER_PAGE } from '../const.js';

import { mapWoocommerceOrders } from './utils/mapWoocommerceOrders.js';
import { getBasicAuthToken } from './getBasicAuthToken.js';

import { logger } from '../utils/logger.js';
import { getCurrentDate } from '../utils/getCurrentDate.js';
import type { WoocommerceOrder } from './types/woocommerce.js';

export const getDailyWoocommerceOrders = async () => {
  const headers = new Headers();
  const basicAuthToken = getBasicAuthToken();
  headers.set('Authorization', `Basic ${basicAuthToken}`);

  // const currentDate = getCurrentDate()
  const currentDate = '2023-07-18T00:00:00';

  const url = `${WORDPRESS_BASE_URL}/wp-json/wc/v1/orders/?after=${currentDate}&per_page=${ORDERS_PER_PAGE}`;

  const options = {
    method: 'GET',
    headers,
  };

  logger.info('Fetching orders...');

  const response = await fetch(url, options);

  logger.success('Orders fetched');

  const data: WoocommerceOrder[] = await response.json();

  return mapWoocommerceOrders(data);
};

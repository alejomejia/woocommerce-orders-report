import { pluralize } from '../../utils/pluralize.js';

type GetHtmlOrders = (ordersCount: number | undefined) => string;

export const getHtmlOrders: GetHtmlOrders = (ordersCount) => {
  if (!ordersCount) {
    return '';
  }

  const pluralizeOrders = pluralize({ count: ordersCount, singular: 'order' });

  return `
    <h1>You had ${ordersCount} ${pluralizeOrders}!</h1>
    <p>You can find the orders report attached to this email</p>
  `;
};

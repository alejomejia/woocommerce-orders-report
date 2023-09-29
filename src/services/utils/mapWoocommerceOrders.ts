import { mapWoocommerceProducts } from './mapWoocommerceProducts.js';

import type { WoocommerceOrder } from '../types/woocommerce.js';
import type { Order } from '../types/orders.js';

type MapWoocommerceOrders = (orders: WoocommerceOrder[]) => Order[];

export const mapWoocommerceOrders: MapWoocommerceOrders = (orders) => {
  return orders.map((order) => {
    const {
      id,
      status,
      date_created: dateCreated,
      prices_include_tax: pricesIncludeTax,
      discount_total: discountTotal,
      shipping_total: shippingTotal,
      total,
      total_tax: totalTax,
      payment_method_title: paymentMethodTitle,
      transaction_id: transactionId,
      date_paid: datePaid,
      line_items: lineItems,
      billing,
      shipping,
    } = order;

    const {
      first_name: billingFirstName,
      last_name: billingLastName,
      company: billingCompany,
      address_1: billingAddress1,
      address_2: billingAddress2,
      city: billingCity,
      state: billingState,
      postcode: billingPostcode,
      email: billingEmail,
      phone: billingPhone,
    } = billing;

    const {
      first_name: shippingFirstName,
      last_name: shippingLastName,
      company: shippingCompany,
      address_1: shippingAddress1,
      address_2: shippingAddress2,
      city: shippingCity,
      state: shippingState,
      postcode: shippingPostcode,
      phone: shippingPhone,
    } = shipping;

    const products = mapWoocommerceProducts(lineItems).join(', ');

    return {
      id,
      status,
      dateCreated: new Date(dateCreated).toLocaleDateString(),
      pricesIncludeTax: pricesIncludeTax ? 'Si' : 'No',
      discountTotal,
      shippingTotal,
      total,
      totalTax,
      paymentMethodTitle,
      transactionId,
      datePaid,
      products,
      billingFirstName,
      billingLastName,
      billingCompany,
      billingAddress1,
      billingAddress2,
      billingCity,
      billingState,
      billingPostcode,
      billingEmail,
      billingPhone,
      shippingFirstName,
      shippingLastName,
      shippingCompany,
      shippingAddress1,
      shippingAddress2,
      shippingCity,
      shippingState,
      shippingPostcode,
      shippingPhone,
    };
  });
};

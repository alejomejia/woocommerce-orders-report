import type { OrderProduct } from '../types/orders';

type MapWoocommerceProducts = (products: OrderProduct[]) => string[];

export const mapWoocommerceProducts: MapWoocommerceProducts = (products) => {
  return products.map((product) => {
    const { quantity, name, price, total } = product;

    return `x${quantity} ${name} - Unidad $${price} - Total $${total}`;
  });
};

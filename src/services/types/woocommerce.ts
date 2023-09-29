export type WoocommerceOrder = {
  id: number;
  parent_id: number;
  status: string;
  order_key: string;
  number: string;
  currency: string;
  version: string;
  prices_include_tax: boolean;
  date_created: Date;
  date_modified: Date;
  customer_id: number;
  discount_total: string;
  discount_tax: string;
  shipping_total: string;
  shipping_tax: string;
  cart_tax: string;
  total: string;
  total_tax: string;
  billing: CustomerData;
  shipping: CustomerData;
  payment_method: string;
  payment_method_title: string;
  transaction_id: string;
  customer_ip_address: string;
  customer_user_agent: string;
  created_via: string;
  customer_note: string;
  date_completed: null;
  date_paid: null;
  cart_hash: string;
  line_items: LineItem[];
  tax_lines: any[];
  shipping_lines: ShippingLine[];
  fee_lines: any[];
  coupon_lines: any[];
  refunds: any[];
  _links: Links;
};

type Links = {
  self: Collection[];
  collection: Collection[];
};

type Collection = {
  href: string;
};

type CustomerData = {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email?: string;
  phone: string;
};

type LineItem = {
  id: number;
  name: string;
  sku: string;
  product_id: number;
  variation_id: number;
  quantity: number;
  tax_class: string;
  price: string;
  subtotal: string;
  subtotal_tax: string;
  total: string;
  total_tax: string;
  taxes: any[];
  meta: any[];
};

type ShippingLine = {
  id: number;
  method_title: string;
  method_id: string;
  total: string;
  total_tax: string;
  taxes: any[];
};

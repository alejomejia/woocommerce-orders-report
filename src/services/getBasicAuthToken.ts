import {
  WOOCOMMERCE_API_USERNAME,
  WOOCOMMERCE_API_PASSWORD,
} from '../const.js';

type GetBasicAuthToken = () => string;

export const getBasicAuthToken: GetBasicAuthToken = () => {
  return Buffer.from(
    `${WOOCOMMERCE_API_USERNAME}:${WOOCOMMERCE_API_PASSWORD}`
  ).toString('base64');
};

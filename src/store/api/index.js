import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

import config from '../../config';

export const api = new WooCommerceRestApi({
  url: config.api_url,
  consumerKey: config.api_key,
  consumerSecret: config.api_secret,
  version: 'wc/v3',
});

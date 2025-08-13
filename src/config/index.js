import { Config } from 'react-native-config';

const config = {
  api_url: Config.WOOCOMMERCE_URL,
  api_key: Config.WOOCOMMERCE_CLIENT_KEY,
  api_secret: Config.WOOCOMMERCE_CLIENT_SECRET,
};

export default config;

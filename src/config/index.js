import { Config } from 'react-native-config';

const config = {
  env: Config.APP_ENV,
  api_url: Config.WOOCOMMERCE_URL,
  api_key: Config.WOOCOMMERCE_CLIENT_KEY,
  api_secret: Config.WOOCOMMERCE_CLIENT_SECRET,
  app_version: `${Config.MAJOR_VERSION}.${Config.MINOR_VERSION}.${Config.PATCH_VERSION}`,
  build_version: Config.VERSION_CODE,
};

export default config;

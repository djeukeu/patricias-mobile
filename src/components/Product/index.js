import React from 'react';

import {
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

import style from './styles';
import { useAppTheme } from '../../hooks';
const Product = () => {
  const { theme } = useAppTheme();
  const { width } = useWindowDimensions();
  //   const [like, setLike] = useState(isWish);
  const styles = style(theme);

  return (
    <DropShadow style={styles.shadowStyle}>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.85}
        onPress={() => {
          //   navigation.navigate('ProductDetailScreen', { id: item?.id });
        }}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://patriciaskinscentsecrets.com/wp-content/uploads/2025/01/Azur-Elegance-Eau-de-Parfum-70ml.webp',
            }}
            style={styles.image}
          />
        </View>
        <View style={{ ...styles.content, width: width - 160 }}></View>
      </TouchableOpacity>
    </DropShadow>
  );
};

export default Product;

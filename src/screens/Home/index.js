import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import {
  View,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { MD2Colors, Searchbar, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import CategorySlider from '../../components/CategorySlider';
import Colors from '../../constants/Colors';
import { useAppTheme } from '../../hooks';
import { getCategoriesAction } from '../../store/actions/category';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useTranslation();
  const { isDark } = useAppTheme();
  const [slideWidth, setSlideWidth] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const { width, height } = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  const sliderImages = [
    require('../../assets/images/banner/banner-1.png'),
    require('../../assets/images/banner/banner-2.png'),
    require('../../assets/images/banner/banner-3.png'),
    require('../../assets/images/banner/banner-4.png'),
    require('../../assets/images/banner/banner-5.png'),
  ];

  useEffect(() => {
    setLoading(true);
    dispatch(getCategoriesAction()).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <ScrollView style={styles.screen}>
      <Searchbar
        placeholder={t('home.search')}
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchContainer}
        iconColor={isDark ? MD2Colors.white : MD2Colors.black}
      />
      <View
        style={{
          marginVertical: 4,
          marginHorizontal: 8,
        }}
        onLayout={(e) => {
          setSlideWidth(e.nativeEvent.layout.width);
        }}>
        <SliderBox
          images={sliderImages}
          disableOnPress={true}
          dotColor={Colors.tertiary}
          inactiveDotColor={Colors.secondary}
          imageLoadingColor={Colors.primary}
          autoplay={true}
          circleLoop
          autoplayInterval={5000}
          parentWidth={slideWidth}
          sliderBoxHeight={isLandscapeMode ? 300 : 200}
          resizeMethod={isLandscapeMode ? 'scale' : 'resize'}
          resizeMode={isLandscapeMode ? 'contain' : 'cover'}
          ImageComponentStyle={{
            borderRadius: 13,
          }}
        />
      </View>
      <View style={styles.categoryHeader}>
        <Text variant="titleSmall">{t('home.category')}</Text>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.83}>
          <Text variant="bodyMedium" style={styles.seeAllTxt}>
            {t('home.seeAll')}
          </Text>
        </TouchableOpacity>
      </View>
      <CategorySlider
        list={[
          {
            id: 'all',
            name: t('home.all'),
          },
          ...categories,
        ]}
        active={activeCategory}
      />
    </ScrollView>
  );
};

export default Home;

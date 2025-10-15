import React, { useState, Fragment } from 'react';

import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import CurrencyPicker from 'react-native-currency-picker';
import { List, MD2Colors, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import VersionCheck from 'react-native-version-check';

import styles from './styles';
import LanguageDialog from '../../components/LanguageDialog';
import ThemeDialog from '../../components/ThemeDialog';
import config from '../../config';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { useAppCurrency, useAppTheme } from '../../hooks';

const ListRightItem = ({ text, textTransform }) => {
  return (
    <View style={styles.rightContainer}>
      {text && (
        <Text variant="bodyMedium" style={{ textTransform }}>
          {text}
        </Text>
      )}
      <MaterialIcons
        name="keyboard-arrow-right"
        color={MD2Colors.grey600}
        size={18}
      />
    </View>
  );
};

const Setting = (props) => {
  const { t, i18n } = useTranslation();
  const [lngDialog, setLngDialog] = useState(false);
  const [themeDialog, setThemeDialog] = useState(false);
  const insets = useSafeAreaInsets();
  const { changePreference, preference, theme, isDark } = useAppTheme();
  const { changeCurrency, currency } = useAppCurrency();
  const appVersion = VersionCheck.getCurrentVersion();

  let tag;
  if (config.env === 'development') {
    tag = '-alpha';
  } else if (config.env === 'staging') {
    tag = '-beta';
  } else {
    tag = '';
  }

  let currencyPickerRef;

  const closeLngDialog = () => {
    setLngDialog(false);
  };

  const closeThemeDialog = () => {
    setThemeDialog(false);
  };

  const changeLanguage = (language) => {
    setLngDialog(false);
    i18n.changeLanguage(language);
  };

  const changeThemeMode = (mode) => {
    setThemeDialog(false);
    changePreference(mode);
  };

  const itemList = [
    {
      id: 'currency',
      title: t('setting.currency'),
      icon: 'currency-usd',
      onPress: () => {
        currencyPickerRef.open();
      },
      right: () => <ListRightItem text={currency} textTransform="uppercase" />,
    },
    {
      id: 'language',
      title: t('setting.language'),
      icon: 'translate',
      onPress: () => {
        setLngDialog(true);
      },
      right: () => (
        <ListRightItem
          text={t(`setting.${i18n.languages[0]}`)}
          textTransform="capitalize"
        />
      ),
    },
    {
      id: 'appearance',
      title: t('setting.appearance'),
      icon: 'theme-light-dark',
      onPress: () => {
        setThemeDialog(true);
      },
      right: () => (
        <ListRightItem text={preference} textTransform="capitalize" />
      ),
    },
    {
      id: 'newsletter',
      title: t('setting.newsletter'),
      icon: 'newspaper',
      onPress: () => {
        props.navigation.navigate('WebScreen', {
          uri: config.api_url + 'blog',
        });
      },
      right: ListRightItem,
    },
    {
      id: 'help',
      title: t('setting.help'),
      icon: 'help-circle-outline',
      onPress: () => {
        props.navigation.navigate('WebScreen', {
          uri: config.api_url + 'contact',
        });
      },
      right: ListRightItem,
    },
    {
      id: 'privacy',
      title: t('setting.privacy'),
      icon: 'shield-lock',
      onPress: () => {
        props.navigation.navigate('WebScreen', {
          uri: config.api_url + 'privacy-policy',
        });
      },
      right: ListRightItem,
    },
    {
      id: 'terms',
      title: t('setting.terms'),
      icon: 'file-document',
      onPress: () => {
        props.navigation.navigate('WebScreen', {
          uri: config.api_url + 'refund_returns',
        });
      },
      right: ListRightItem,
    },
    {
      id: 'faqs',
      title: t('setting.faqs'),
      icon: 'comment-question-outline',
      onPress: () => {
        props.navigation.navigate('WebScreen', {
          uri: config.api_url + 'faq',
        });
      },
      right: ListRightItem,
    },
  ];

  return (
    <>
      <View style={styles.screen}>
        {itemList.map((item) => {
          return (
            <Fragment key={item.id}>
              <List.Item
                title={item.title}
                left={(p) => (
                  <List.Icon
                    {...p}
                    icon={item.icon}
                    color={isDark ? MD2Colors.white : Colors.primary}
                  />
                )}
                right={item.right}
                onPress={item.onPress}
              />
            </Fragment>
          );
        })}
        <View style={styles.versionWrapper}>
          <Text variant="bodyMedium">
            Version: {appVersion}
            {tag}
          </Text>
        </View>
      </View>
      <LanguageDialog
        visible={lngDialog}
        hideDialog={closeLngDialog}
        changeLanguage={changeLanguage}
      />
      <ThemeDialog
        visible={themeDialog}
        hideDialog={closeThemeDialog}
        changeTheme={changeThemeMode}
      />
      <CurrencyPicker
        currencyPickerRef={(ref) => {
          currencyPickerRef = ref;
        }}
        enable={false}
        darkMode={theme === 'dark'}
        currencyCode={currency}
        showFlag={true}
        showCurrencyName={true}
        showCurrencyCode={true}
        onSelectCurrency={(data) => {
          changeCurrency(data.code);
        }}
        showNativeSymbol={false}
        showSymbol={false}
        containerStyle={{
          container: {},
          flagWidth: 25,
          currencyCodeStyle: {},
          currencyNameStyle: {},
          symbolStyle: {},
          symbolNativeStyle: {},
        }}
        modalStyle={{
          container: {
            backgroundColor: Colors.background[theme],
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
          searchStyle: {
            backgroundColor: isDark ? MD2Colors.grey800 : MD2Colors.grey100,
          },
          tileStyle: {
            fontFamily: Fonts.medium,
            color: isDark ? MD2Colors.white : MD2Colors.black,
          },
          itemStyle: {
            itemContainer: { backgroundColor: Colors.background[theme] },
            flagWidth: 25,
            currencyCodeStyle: {
              fontFamily: Fonts.medium,
              color: isDark ? MD2Colors.white : MD2Colors.black,
            },
            currencyNameStyle: {
              fontFamily: Fonts.medium,
              color: isDark ? MD2Colors.white : MD2Colors.black,
            },
            symbolStyle: {},
            symbolNativeStyle: {},
          },
        }}
        title={t('setting.select')}
        searchPlaceholder={t('setting.searchCurrency')}
        showCloseButton={true}
        showModalTitle={true}
      />
    </>
  );
};

export default Setting;

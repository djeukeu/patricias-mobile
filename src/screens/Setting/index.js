import React, { useState, Fragment } from 'react';

import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { useTranslation } from 'react-i18next';
import { View, Linking } from 'react-native';
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

const Setting = () => {
  const { t, i18n } = useTranslation();
  const [lngDialog, setLngDialog] = useState(false);
  const [themeDialog, setThemeDialog] = useState(false);
  const insets = useSafeAreaInsets();
  const { changePreference, preference, theme, isDark } = useAppTheme();
  const { changeCurrency, currency } = useAppCurrency();
  const appVersion = VersionCheck.getCurrentVersion();
  const iconColor = isDark ? MD2Colors.white : Colors.primary;

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

  return (
    <>
      <View style={styles.screen}>
        <List.Item
          title={t('setting.currency')}
          left={(props) => (
            <List.Icon {...props} icon="currency-usd" color={iconColor} />
          )}
          right={() => (
            <ListRightItem text={currency} textTransform="uppercase" />
          )}
          onPress={() => {
            currencyPickerRef.open();
          }}
        />
        <List.Item
          title={t('setting.language')}
          left={(props) => (
            <List.Icon {...props} icon="translate" color={iconColor} />
          )}
          right={() => (
            <ListRightItem
              text={t(`setting.${i18n.languages[0]}`)}
              textTransform="capitalize"
            />
          )}
          onPress={() => {
            setLngDialog(true);
          }}
        />
        <List.Item
          title={t('setting.appearance')}
          left={(props) => (
            <List.Icon {...props} icon="theme-light-dark" color={iconColor} />
          )}
          right={() => (
            <ListRightItem text={preference} textTransform="capitalize" />
          )}
          onPress={() => {
            setThemeDialog(true);
          }}
        />
        <List.Item
          title={t('setting.newsletter')}
          left={(props) => (
            <List.Icon {...props} icon="newspaper" color={iconColor} />
          )}
          right={ListRightItem}
          onPress={() => {
            Linking.openURL(config.api_url + 'blog');
          }}
        />
        <List.Item
          title={t('setting.help')}
          left={(props) => (
            <List.Icon
              {...props}
              icon="help-circle-outline"
              color={iconColor}
            />
          )}
          right={ListRightItem}
          onPress={() => {
            Linking.openURL(config.api_url + 'contact');
          }}
        />
        <List.Item
          title={t('setting.privacy')}
          left={(props) => (
            <List.Icon {...props} icon="shield-lock" color={iconColor} />
          )}
          right={ListRightItem}
          onPress={() => {
            Linking.openURL(config.api_url + 'privacy-policy');
          }}
        />
        <List.Item
          title={t('setting.terms')}
          left={(props) => (
            <List.Icon {...props} icon="file-document" color={iconColor} />
          )}
          right={ListRightItem}
          onPress={() => {
            Linking.openURL(config.api_url + 'refund_returns');
          }}
        />
        <List.Item
          title={t('setting.faqs')}
          left={(props) => (
            <List.Icon
              {...props}
              icon="comment-question-outline"
              color={iconColor}
            />
          )}
          right={ListRightItem}
          onPress={() => {
            Linking.openURL(config.api_url + 'faq');
          }}
        />
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

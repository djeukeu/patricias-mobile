import React, { useState, Fragment } from 'react';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View, Linking } from 'react-native';
import { List, MD2Colors } from 'react-native-paper';
import styles from './styles';
import LanguageDialog from '../../components/LanguageDialog';
import config from '../../config';
import Colors from '../../constants/Colors';

const ListRightItem = ({ text }) => {
  return (
    <View style={styles.rightContainer}>
      {text && <Text style={styles.rightContainerTxt}>{text}</Text>}
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
  let currencyPickerRef;

  console.log(currencyPickerRef);

  const closeLngDialog = () => {
    setLngDialog(false);
  };

  const changeLanguage = (language) => {
    setLngDialog(false);
    i18n.changeLanguage(language);
  };

  return (
    <Fragment>
      <ScrollView style={styles.screen}>
        <List.Item
          rippleColor={Colors.transparent}
          titleStyle={styles.itemtxt}
          title={t('setting.currency')}
          left={(props) => (
            <List.Icon {...props} icon="currency-usd" color={Colors.primary} />
          )}
          right={ListRightItem}
          onPress={() => {
            currencyPickerRef.open();
          }}
        />
        <List.Item
          rippleColor={Colors.transparent}
          titleStyle={styles.itemtxt}
          title={t('setting.language')}
          left={(props) => (
            <List.Icon {...props} icon="translate" color={Colors.primary} />
          )}
          right={() => (
            <ListRightItem text={t(`setting.${i18n.languages[0]}`)} />
          )}
          onPress={() => {
            setLngDialog(true);
          }}
        />
        <List.Item
          rippleColor={Colors.transparent}
          titleStyle={styles.itemtxt}
          title={t('setting.appearance')}
          left={(props) => (
            <List.Icon
              {...props}
              icon="theme-light-dark"
              color={Colors.primary}
            />
          )}
          right={ListRightItem}
          onPress={() => {}}
        />
        <List.Item
          rippleColor={Colors.transparent}
          titleStyle={styles.itemtxt}
          title={t('setting.newsletter')}
          left={(props) => (
            <List.Icon {...props} icon="newspaper" color={Colors.primary} />
          )}
          right={ListRightItem}
          onPress={() => {
            Linking.openURL(config.api_url + 'blog');
          }}
        />
        <List.Item
          rippleColor={Colors.transparent}
          titleStyle={styles.itemtxt}
          title={t('setting.help')}
          left={(props) => (
            <List.Icon
              {...props}
              icon="help-circle-outline"
              color={Colors.primary}
            />
          )}
          right={ListRightItem}
          onPress={() => {
            Linking.openURL(config.api_url + 'contact');
          }}
        />
        <List.Item
          rippleColor={Colors.transparent}
          titleStyle={styles.itemtxt}
          title={t('setting.privacy')}
          left={(props) => (
            <List.Icon {...props} icon="shield-lock" color={Colors.primary} />
          )}
          right={ListRightItem}
          onPress={() => {
            Linking.openURL(config.api_url + 'privacy-policy');
          }}
        />
        <List.Item
          rippleColor={Colors.transparent}
          titleStyle={styles.itemtxt}
          title={t('setting.terms')}
          left={(props) => (
            <List.Icon {...props} icon="file-document" color={Colors.primary} />
          )}
          right={ListRightItem}
          onPress={() => {
            Linking.openURL(config.api_url + 'refund_returns');
          }}
        />
        <List.Item
          rippleColor={Colors.transparent}
          titleStyle={styles.itemtxt}
          title={t('setting.faqs')}
          left={(props) => (
            <List.Icon
              {...props}
              icon="comment-question-outline"
              color={Colors.primary}
            />
          )}
          right={ListRightItem}
          onPress={() => {
            Linking.openURL(config.api_url + 'faq');
          }}
        />
      </ScrollView>
      <LanguageDialog
        visible={lngDialog}
        hideDialog={closeLngDialog}
        changeLanguage={changeLanguage}
        initValue={i18n.languages[0]}
      />
    </Fragment>
  );
};

export default Setting;

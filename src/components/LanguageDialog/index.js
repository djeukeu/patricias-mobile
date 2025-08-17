import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Dialog,
  Portal,
  RadioButton,
  MD2Colors,
} from 'react-native-paper';
import style from './styles';
import Colors from '../../constants/Colors';
import { useAppTheme } from '../../hooks';

const LanguageDialog = ({ visible, hideDialog, changeLanguage, initValue }) => {
  const { t } = useTranslation();
  const { theme, isDark } = useAppTheme();
  const [language, setLanguage] = useState(initValue);
  const styles = style(theme);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog} style={styles.container}>
        <Dialog.Icon
          icon="translate"
          size={36}
          color={isDark ? MD2Colors.white : Colors.primary}
        />
        <Dialog.Title style={styles.title}>
          {t('setting.chooseLanguange')}
        </Dialog.Title>
        <Dialog.Content>
          <RadioButton.Group value={language}>
            <RadioButton.Item
              label={t('setting.en')}
              value="en"
              onPress={() => {
                setLanguage('en');
              }}
              uncheckedColor={MD2Colors.grey500}
              rippleColor={Colors.transparent}
              labelStyle={styles.radioTxt}
            />
            <RadioButton.Item
              label={t('setting.fr')}
              value="fr"
              onPress={() => {
                setLanguage('fr');
              }}
              uncheckedColor={MD2Colors.grey500}
              rippleColor={Colors.transparent}
              labelStyle={styles.radioTxt}
            />
          </RadioButton.Group>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog} labelStyle={styles.dialogBtn}>
            {t('setting.cancel')}
          </Button>
          <Button
            onPress={() => {
              changeLanguage(language);
            }}
            labelStyle={styles.dialogBtn}>
            Ok
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default LanguageDialog;

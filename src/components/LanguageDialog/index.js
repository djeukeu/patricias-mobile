import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Dialog,
  Portal,
  RadioButton,
  MD2Colors,
} from 'react-native-paper';
import Colors from '../../constants/Colors';
import { useAppTheme } from '../../hooks';

const LanguageDialog = ({ visible, hideDialog, changeLanguage }) => {
  const { t, i18n } = useTranslation();
  const { theme, isDark } = useAppTheme();
  const [language, setLanguage] = useState(i18n.languages[0]);

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={hideDialog}
        style={{ backgroundColor: Colors.background[theme] }}>
        <Dialog.Icon
          icon="translate"
          size={36}
          color={isDark ? MD2Colors.white : Colors.primary}
        />
        <Dialog.Title>{t('setting.chooseLanguange')}</Dialog.Title>
        <Dialog.Content>
          <RadioButton.Group value={language}>
            <RadioButton.Item
              label={t('setting.en')}
              value="en"
              onPress={() => {
                setLanguage('en');
              }}
              uncheckedColor={MD2Colors.grey500}
            />
            <RadioButton.Item
              label={t('setting.fr')}
              value="fr"
              onPress={() => {
                setLanguage('fr');
              }}
              uncheckedColor={MD2Colors.grey500}
            />
          </RadioButton.Group>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={hideDialog}
            labelStyle={{ color: isDark ? MD2Colors.white : Colors.primary }}>
            {t('setting.cancel')}
          </Button>
          <Button
            onPress={() => {
              changeLanguage(language);
            }}
            labelStyle={{ color: isDark ? MD2Colors.white : Colors.primary }}>
            Ok
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default LanguageDialog;

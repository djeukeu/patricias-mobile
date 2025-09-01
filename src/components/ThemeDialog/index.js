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

const ThemeDialog = ({ visible, hideDialog, changeTheme }) => {
  const { theme, isDark, preference } = useAppTheme();
  const { t } = useTranslation();
  const [mode, setMode] = useState(preference);

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={hideDialog}
        style={{ backgroundColor: Colors.background[theme] }}>
        <Dialog.Icon
          icon="theme-light-dark"
          size={36}
          color={isDark ? MD2Colors.white : Colors.primary}
        />
        <Dialog.Title>{t('setting.chooseTheme')}</Dialog.Title>
        <Dialog.Content>
          <RadioButton.Group value={mode}>
            <RadioButton.Item
              label={t('setting.system')}
              value="system"
              onPress={() => {
                setMode('system');
              }}
              uncheckedColor={MD2Colors.grey500}
            />
            <RadioButton.Item
              label={t('setting.light')}
              value="light"
              onPress={() => {
                setMode('light');
              }}
              uncheckedColor={MD2Colors.grey500}
            />
            <RadioButton.Item
              label={t('setting.dark')}
              value="dark"
              onPress={() => {
                setMode('dark');
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
              changeTheme(mode);
            }}
            labelStyle={{ color: isDark ? MD2Colors.white : Colors.primary }}>
            Ok
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ThemeDialog;

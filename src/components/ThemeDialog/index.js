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

const ThemeDialog = ({ visible, hideDialog, changeTheme, initValue }) => {
  const { t } = useTranslation();
  const [mode, setMode] = useState(initValue);
  const { theme, isDark } = useAppTheme();
  const styles = style(theme);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog} style={styles.container}>
        <Dialog.Icon
          icon="theme-light-dark"
          size={36}
          color={isDark ? MD2Colors.white : Colors.primary}
        />
        <Dialog.Title style={styles.title}>
          {t('setting.chooseTheme')}
        </Dialog.Title>
        <Dialog.Content>
          <RadioButton.Group value={mode}>
            <RadioButton.Item
              label={t('setting.system')}
              value="system"
              onPress={() => {
                setMode('system');
              }}
              uncheckedColor={MD2Colors.grey500}
              rippleColor={Colors.transparent}
              labelStyle={styles.radioTxt}
            />
            <RadioButton.Item
              label={t('setting.light')}
              value="light"
              onPress={() => {
                setMode('light');
              }}
              uncheckedColor={MD2Colors.grey500}
              rippleColor={Colors.transparent}
              labelStyle={styles.radioTxt}
            />
            <RadioButton.Item
              label={t('setting.dark')}
              value="dark"
              onPress={() => {
                setMode('dark');
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
              changeTheme(mode);
            }}
            labelStyle={styles.dialogBtn}>
            Ok
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ThemeDialog;

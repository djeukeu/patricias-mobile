import { configureFonts } from 'react-native-paper';

import Fonts from '../constants/Fonts';

export const fonts = configureFonts({
  config: {
    displayLarge: { fontFamily: Fonts.light, fontWeight: '300' },
    displayMedium: { fontFamily: Fonts.regular, fontWeight: '400' },
    displaySmall: { fontFamily: Fonts.medium, fontWeight: '500' },

    headlineLarge: { fontFamily: Fonts.regular, fontWeight: '400' },
    headlineMedium: { fontFamily: Fonts.medium, fontWeight: '500' },
    headlineSmall: { fontFamily: Fonts.semiBold, fontWeight: '600' },

    titleLarge: { fontFamily: Fonts.semiBold, fontWeight: '600' },
    titleMedium: { fontFamily: Fonts.bold, fontWeight: '700' },
    titleSmall: { fontFamily: Fonts.bold, fontWeight: '700' },

    labelLarge: { fontFamily: Fonts.bold, fontWeight: '700' },
    labelMedium: { fontFamily: Fonts.semiBold, fontWeight: '600' },
    labelSmall: { fontFamily: Fonts.medium, fontWeight: '500' },

    bodyLarge: { fontFamily: Fonts.regular, fontWeight: '400' },
    bodyMedium: { fontFamily: Fonts.medium, fontWeight: '500' },
    bodySmall: { fontFamily: Fonts.light, fontWeight: '300' },
  },
});

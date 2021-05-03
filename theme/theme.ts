import {
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core';
import { Theme as MuiTheme } from '@material-ui/core/styles/createMuiTheme';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#546ccc',
      main: '#313C6C',
      dark: '#141829',
    },
    secondary: {
      light: '#FCD77A',
      main: '#ffb905',
      dark: '#CB9303',
      contrastText: '#202436',
    },
  },
  spacing: (factor) => `${8 * factor}px`,
  typography: {
    htmlFontSize: 10,
    fontSize: 14,
    fontFamily: 'Montserrat, Arial, sans-serif',
    h1: {
      fontFamily: 'Belwe Bold',
      fontSize: 80,
      lineHeight: 1,
    },
    h2: {
      fontFamily: 'Belwe Bold',
      fontSize: 72,
      lineHeight: 1,
    },
    h3: {
      fontFamily: 'Belwe Bold',
      fontSize: 48,
      lineHeight: 1,
    },
    h4: {
      fontFamily: 'Belwe Bold',
      fontSize: 24,
      lineHeight: 1.1,
    },
    h5: {
      fontFamily: 'Belwe Bold',
      fontSize: 24,
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.8,
    },
    body2: {
      fontSize: 13,
    },
    button: {
      fontSize: 12,
      fontWeight: 700,
      height: 40,
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
    MuiButton: {
      variant: 'contained',
      color: 'secondary',
    },
  },
});

theme = responsiveFontSizes(theme);

export type Theme = MuiTheme;

export default theme;

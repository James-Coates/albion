import {
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core';
import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const theme = {
  baseColors: {
    blue: '#1F3263',
    blues: ['#4e5b91', '#1F3263', '#000b38'],
    red: '#dd2452',
    reds: ['#ff617e', '#dd2452', '#a4002a'],
    green: '#00C851',
    black: '#000',
    white: '#fff',
    greyLight: '#efefef',
  },
  colors: {},
  fonts: {
    heading: 'Belwe Bold',
    text: 'Work Sans, Arial, sans-serif',
  },
  fontSizeUnits: 'rem',
  boxShadow: '',
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

theme.colors = {
  primary: theme.baseColors.blue,
  primaries: theme.baseColors.blues,
  secondary: theme.baseColors.red,
  black: theme.baseColors.black,
  white: theme.baseColors.white,
  text: theme.baseColors.black,
  textAlt: theme.baseColors.white,
  background: theme.baseColors.white,
  subtle: theme.baseColors.greyLight,
  logo: theme.baseColors.white,
  success: theme.baseColors.green,
  danger: theme.baseColors.red,
};

theme.boxShadow = `
  0 1px 2px rgba(0, 0, 0, 0.07),
  0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
  0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
  0 32px 64px rgba(0, 0, 0, 0.07);
  `;

export let muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#C2C8DF',
      main: '#313C6C',
      dark: '#202436',
    },
    secondary: {
      light: '#FCD77A',
      main: '#ffb905',
      dark: '#CB9303',
      contrastText: '#202436',
    },
    text: {
      primary: theme.baseColors.black as string,
    },
    success: {
      main: theme.baseColors.green as string,
    },
    error: {
      main: theme.baseColors.red as string,
    },
  },
  spacing: (factor) => `${8 * factor}px`,
  typography: {
    htmlFontSize: 10,
    fontSize: 14,
    fontFamily: 'Montserrat, Arial, sans-serif',
    h1: {
      fontFamily: theme.fonts.heading,
      fontSize: 96,
      lineHeight: 1,
    },
    h2: {
      fontFamily: theme.fonts.heading,
      fontSize: 72,
      lineHeight: 1,
    },
    h3: {
      fontFamily: theme.fonts.heading,
      fontSize: 48,
      lineHeight: 1,
    },
    h4: {
      fontFamily: theme.fonts.heading,
      fontSize: 24,
      lineHeight: 1.1,
    },
    h5: {
      fontFamily: theme.fonts.heading,
      fontSize: 24,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.8,
    },
    body2: {
      fontSize: 13,
    },
    button: {
      fontSize: 12.5,
      fontWeight: 700,
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

muiTheme = responsiveFontSizes(muiTheme);

export type Theme = Theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export default theme;

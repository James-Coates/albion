import { createTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createTheme({
  palette: {
    primary: {
      light: '#546ccc',
      main: '#383D6C',
      dark: '#141829',
    },
    secondary: {
      light: '#FCD77A',
      main: '#ffb905',
      dark: '#CB9303',
      contrastText: '#202436',
    },
    text: {
      primary: '#383D6C',
    },
  },
  spacing: (factor: number) => `${8 * factor}px`,
  typography: {
    htmlFontSize: 10,
    fontSize: 14,
    fontFamily: 'Oswald, Arial, sans-serif',
    h1: {
      fontFamily: 'Belwe Bold',
      fontSize: 120,
      lineHeight: 1,
    },
    h2: {
      fontFamily: 'Belwe Bold',
      fontSize: 90,
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: 'Belwe Bold',
      fontSize: 56,
      lineHeight: 1.1,
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
      fontSize: 32,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: 24,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 18,
      lineHeight: 1.8,
      letterSpacing: '0.03em',
    },
    body2: {
      fontSize: 13,
    },
    button: {
      fontSize: 14,
      letterSpacing: '0.1em',
      fontWeight: 400,
    },
    overline: {
      fontSize: 14,
      letterSpacing: '0.1em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          height: 56,
          padding: '0 3em',
        },
      },
      defaultProps: {
        variant: 'contained',
        color: 'secondary',
        disableElevation: true,
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
          display: 'list-item',
          listStyle: 'disc',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        InputLabelProps: {
          shrink: true,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

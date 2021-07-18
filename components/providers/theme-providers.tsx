import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import theme, { GlobalStyle } from '@theme/index';
import 'swiper/swiper-bundle.css';

export const ThemeProviders: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </MuiThemeProvider>
  </ThemeProvider>
);

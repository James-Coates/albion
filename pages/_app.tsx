import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/global-styles';
import theme, { muiTheme } from '../theme/theme';

import 'swiper/swiper-bundle.css';
import { MuiThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { AppWrapper } from '../state';
import { useEffect } from 'react';
import config from 'react-reveal/globals';

function MyApp({ Component, pageProps }) {
  config({ ssrFadeout: true });

  return (
    <ThemeProvider theme={muiTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <GlobalStyle />
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;

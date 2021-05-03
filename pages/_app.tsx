import React from 'react';
import config from 'react-reveal/globals';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { AppWrapper } from '@state/index';
import { ThemeProviders } from '@components/providers';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  config({ ssrFadeout: true });

  return (
    <AppWrapper>
      <ThemeProviders>
        <Component {...pageProps} />
      </ThemeProviders>
    </AppWrapper>
  );
};

export default MyApp;

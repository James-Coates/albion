import React, { useEffect } from 'react';
import config from 'react-reveal/globals';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { AppWrapper } from '@state/index';
import { ThemeProviders } from '@components/providers';
import { useRouter } from 'next/router';
import { pageview } from '@lib/analytics';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  config({ ssrFadeout: true });

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppWrapper>
      <ThemeProviders>
        <Component {...pageProps} />
      </ThemeProviders>
    </AppWrapper>
  );
};

export default MyApp;

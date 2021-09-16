import React from 'react';
import NextDocument, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles';

declare var dataLayer: any;

export default class Document extends NextDocument {
  anaylticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
  `;

  static async getInitialProps(ctx: any) {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />),
            ),
        });

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={
              'https://www.googletagmanager.com/gtag/js?id=' +
              process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
            }
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: this.anaylticsScript,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <div id="mobile-menu-root"></div>
          <div id="modal-root"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

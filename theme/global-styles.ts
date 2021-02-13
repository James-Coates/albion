import { createGlobalStyle, ThemeProps } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';
import { Theme } from './theme';

type GlobalStyleProps = ThemeProps<Theme>;

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`  
  ${reset}
  ${normalize}

  @font-face {
    font-family: 'Belwe Bold';
    src: url(/fonts/belweboldbt-webfont.woff) format('woff2'), url(/fonts/belweboldbt-webfont.woff2) format('woff');
    font-weight: 400;
  }

  :root {
    font-size: 6.25%;
  }

  html {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-size: ${({ theme }) => `${theme.fontSizes[3]}rem`}
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;

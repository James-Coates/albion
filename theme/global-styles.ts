import { createGlobalStyle, ThemeProps } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';
import { Theme } from '@material-ui/core';

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
    font-size: 62.5%;
  }

  html {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.palette.common.white};
    scroll-snap-type: y proximity;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background-color: transparent;
    outline: none;
    border: none;
  }

  #mobile-menu-root {
    z-index: 100;
    position: relative;
  }

ol {
  list-style: decimal;
  margin: 1em 0;
  padding-left: 2em;
  li {
    padding-left: 0.5em;

  }
}
`;

export default GlobalStyle;

import { createGlobalStyle, ThemeProps } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';
import { Theme } from './theme';
import { createFontSizes } from './helpers';

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

  /*--------------------
SHARED VARIABLES
--------------------*/
$red: #E91E63;
$blue: #3F51B5;
$grey: #EAE8E9;
$grey2: #f3f3f3;
$white: #FFF;

#cardForm {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


/*--------------------
PANEL FORM
--------------------*/

.panel {
  background: $white;
  width: 80%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .16), 0 0 2px 0 rgba(0, 0, 0, .12);
}

.panel__header {
  background: $blue;
  color: $white;
}

.panel__header,
.panel__footer {
  padding: 1em 2em;
}

.panel__footer {
  background: $grey2;
}

.panel__content {
  padding: 1em 2em;
  overflow: hidden;
}

.textfield--float-label {
  width: 50%;
  float: left;
  display: inline-block;
  padding-right: 5px;
}

.hosted-field--label {
  transform: translateY(0.4em);
  font-size: 1.125em;
  line-height: 32px;
  transition: all .15s ease-out;
  display: block;
  width: 100%;
  font-weight: 400;
  overflow: hidden;
  margin-bottom: 0.5em;
  &.label-float {
    text-overflow: ellipsis;
    color: #2196F3;
    transition: all .15s ease-out
  }
  &.filled {
    @extend .label-float;
    color: rgba(0, 0, 0, .54);
  }
  &.invalid {
    @extend .label-float;
    color: #F44336;
  }
}

.hosted-field {
  height: 60px;
  margin-bottom: 1em;
  display: block;
  background-color: transparent;
  color: rgba(0, 0, 0, .87);
  border: none;
  border: 1px solid rgba(0, 0, 0, .26);
  border-radius: 4px;
  outline: 0;
  width: 100%;
  font-size: 16px;
  padding: 18.5px 32px 14px 18.5px;
  box-shadow: none;
  position: relative;
}

/*--------------------
BT HOSTED FIELDS SPECIFIC 
--------------------*/

.braintree-hosted-fields-focused {
  border-bottom: 2px solid $blue;
  transition: all 200ms ease;
}

.braintree-hosted-fields-invalid {
  border-bottom: 2px solid $red;
  transition: all 200ms ease;
}


/*---------------------
Media Queries
----------------------*/

@media (max-width: 600px) {
  html {
    overflow: auto;
  }
  #cardForm {
    height: auto;
    margin: 2em;
    font-size: 13px;
  }
  .panel {
    width: 100%;
  }
  .textfield--float-label {
    width: 100%;
    float: none;
    display: inline-block;
  }
  .pay-button {
    width: 100%;
  }
}
`;

export default GlobalStyle;

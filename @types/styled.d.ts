import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

type ThemeInterface = Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}

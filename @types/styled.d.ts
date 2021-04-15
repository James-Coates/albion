// import original module declarations
import 'styled-components';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import baseStyled, { ThemedStyledInterface } from 'styled-components';

type ThemeInterface = Theme;

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}

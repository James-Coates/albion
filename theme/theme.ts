export interface Theme {
  baseColors: { [key: string]: string };
  colors: { [key: string]: string };
  fontSizeUnits: string;
  fontSizes: number[];
  fs: { [key: string]: number[] };
  fonts: { [key: string]: string };
  lineHeight: { [key: string]: number };
}

const theme: Theme = {
  baseColors: {},
  colors: {},
  fontSizeUnits: 'rem',
  fontSizes: [],
  fs: {},
  fonts: {},
  lineHeight: {},
};

theme.baseColors = {
  blue: '#1F3263',
  red: '#DD4557',
  black: '#000',
  white: '#fff',
};

theme.colors = {
  primary: theme.baseColors.blue,
  secondary: theme.baseColors.red,
  black: theme.baseColors.black,
  white: theme.baseColors.white,
  text: theme.baseColors.black,
  textAlt: theme.baseColors.white,
  background: theme.baseColors.white,
  logo: theme.baseColors.white,
};

theme.fontSizes = [
  12, // xxs
  14, // xs
  16, // psm
  18, // plg
  24, // h4sm
  32, // h4lg h3sm
  56, // h
  72, // h1lg
];

theme.fs = {
  p: [theme.fontSizes[2], theme.fontSizes[3]],
  h1: [theme.fontSizes[6], theme.fontSizes[7]],
  h2: [theme.fontSizes[5], theme.fontSizes[6]],
  h3: [theme.fontSizes[4], theme.fontSizes[5]],
  h4: [theme.fontSizes[3], theme.fontSizes[4]],
};

theme.fonts = {
  heading: 'Belwe Bold',
  text: 'Poppins, Arial, sans-serif',
};

theme.lineHeight = {
  p: 1.5,
};

export default theme;

import React, { ReactNode } from 'react';
import styled, { css, ThemeProps } from 'styled-components';
import PropTypes from 'prop-types';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import theme, { Theme } from '../../theme/theme';
import propTypes from '@styled-system/prop-types';

export interface TextProps
  extends SpaceProps,
    LayoutProps,
    ColorProps,
    TypographyProps {
  theme?: Theme;
  type?: string;
  children?: ReactNode;
}

const fontSize = (type) =>
  theme.fs[type] ? theme.fs[type] : theme.fs.p;

const styles = css`
  line-height: ${({ theme, type }: TextProps) =>
    theme.lineHeight[type] ? theme.lineHeight[type] : 1};
  ${layout};
  ${color};
  ${typography};
`;

export const Text = styled(
  ({ type, children, fontSize, marginRight, ...props }: TextProps) =>
    React.createElement(type, props, children),
)`
  ${styles}
`;

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.position,
  type: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  type: 'p',
};

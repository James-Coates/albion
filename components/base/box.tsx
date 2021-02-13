import styled, { css } from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

export interface BoxProps
  extends PositionProps,
    LayoutProps,
    ColorProps,
    SpaceProps,
    BorderProps {
  children?: React.ReactNode;
}

const styles = css`
  ${space}
  ${layout}
  ${color}
  ${position}
  ${border}
`;

export const Box = styled.div<BoxProps>`
  ${styles}
`;

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.position,
  ...propTypes.border,
};

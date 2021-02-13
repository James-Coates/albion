import styled, { css } from 'styled-components';
import { grid, GridProps } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { Box, BoxProps } from './box';

type Props = GridProps & BoxProps;

const styles = css`
  ${grid}
`;

export const Grid = styled(Box)<Props>`
  ${styles}
`;

Grid.defaultProps = {
  display: 'grid',
};

Grid.propTypes = {
  ...Box.propTypes,
  ...propTypes.grid,
};

import styled, { css } from 'styled-components';
import { grid, GridProps } from 'styled-system';
import { Box, BoxProps } from '@material-ui/core';

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
};

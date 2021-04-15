import { Box, BoxProps } from '@material-ui/core';
import styled from 'styled-components';
import { grid, GridProps } from 'styled-system';
import { Grid } from './grid';

type GridItemProps = BoxProps & GridProps;

export const GridItem = styled(Box)<GridItemProps>`
  ${grid}
`;

GridItem.propTypes = {
  ...Box.propTypes,
  ...Grid.propTypes,
};

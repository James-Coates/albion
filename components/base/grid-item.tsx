import styled from 'styled-components';
import { grid, GridProps } from 'styled-system';
import { Box, BoxProps } from './box';
import { Grid } from './grid';

type GridItemProps = BoxProps & GridProps;

export const GridItem = styled(Box)<GridItemProps>`
  ${grid}
`;

GridItem.propTypes = {
  ...Box.propTypes,
  ...Grid.propTypes,
};

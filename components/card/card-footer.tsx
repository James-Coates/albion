import styled from 'styled-components';
import { Flex, Grid, Heading, Text } from '../base';
import { GridItem } from '../base/grid-item';
import { transparentize } from 'polished';
import MapSvg from '../../public/images/uk.svg';
import { Icon } from '../base/icon';

const borderColor = (theme) =>
  transparentize(0.6, theme.colors.white);

const CardFooterGrid = styled(Grid)`
  border-top: 1px solid ${({ theme }) => borderColor(theme)};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
  grid-template-columns: 52% 1fr;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    'price map'
    'date map';
`;

const GridItemPrice = styled(GridItem)`
  grid-area: price;
  padding: 0 16px;
  border-bottom: 1px solid ${({ theme }) => borderColor(theme)};
`;

const GridItemDate = styled(GridItem)`
  grid-area: date;
  padding: 0 16px;
`;

const GridItemMap = styled(GridItem)`
  grid-area: map;
  border-left: 1px solid ${({ theme }) => borderColor(theme)};
  text-align: center;
`;

export const CardFooter = ({ data }) => (
  <CardFooterGrid>
    <GridItemPrice>
      <Flex alignItems="center" height="100%">
        <Text marginRight={32}>From</Text>
        <Heading level={4} margin={0}>
          £{data.price}
        </Heading>
      </Flex>
    </GridItemPrice>
    <GridItemDate>
      <Flex alignItems="center" height="100%">
        <Text fontSize="14px">{data.availability}</Text>
      </Flex>
    </GridItemDate>
    <GridItemMap>
      <Icon height="90%" color="white">
        <MapSvg></MapSvg>
      </Icon>
    </GridItemMap>
  </CardFooterGrid>
);

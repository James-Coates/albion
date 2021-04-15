import styled, { css } from 'styled-components';
import { rgba, transparentize } from 'polished';
import MapSvg from '../../public/images/uk.svg';
import { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '../atoms/box';
import { Svg } from '../atoms';

interface TourCardFooterProps {
  price: number;
  availability?: string;
  map?: string;
}

const borderColor = (theme) =>
  transparentize(0.6, theme.palette.common.white);

const CardFooterGrid = styled.div`
  display: grid;
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

const GridItemPrice = styled.div`
  grid-area: price;
  padding: 0 16px;
  border-bottom: 1px solid ${({ theme }) => borderColor(theme)};
  display: flex;
  align-items: center;
`;

const GridItemDate = styled.div`
  grid-area: date;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;

const GridItemMap = styled.div`
  grid-area: map;
  border-left: 1px solid ${({ theme }) => borderColor(theme)};
  text-align: center;
`;

const CardFooterBg = styled.div`
  min-height: 160px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(4px);
  z-index: -1;

  ${({ theme }) => css`
    background-color: ${transparentize(
      0.8,
      theme.palette.primary.dark,
    )};
  `}
`;

export const TourCardFooter: FC<TourCardFooterProps> = ({
  price,
  availability,
}) => (
  <CardFooterGrid>
    <CardFooterBg />
    <GridItemPrice>
      <Box mr={4}>
        <Typography variant="body2" component="span">
          From
        </Typography>
      </Box>

      <Typography variant="h3" component="span">
        £{price}
      </Typography>
    </GridItemPrice>
    <GridItemDate>
      {availability ? (
        <Typography variant="body2" component="span">
          {availability}
        </Typography>
      ) : (
        <Typography variant="body2" component="span">
          Available every Wednesday
        </Typography>
      )}
    </GridItemDate>

    <GridItemMap>
      <Svg height="90%" color="white">
        <MapSvg />
      </Svg>
    </GridItemMap>
  </CardFooterGrid>
);

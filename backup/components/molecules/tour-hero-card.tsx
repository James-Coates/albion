import { Box, Grid, Typography } from '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';
import TempMap from '../../public/images/temp-map.svg';
import { PriceBlock } from './price-block';

interface TourHeroCardProps {
  heading: string;
  price: number;
  mapImage?: any;
}

const Wrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.5);
  max-width: 480px;
  min-height: 400px;
  background-color: rgba(15, 18, 51, 0.3);
`;

const Header = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

const MapWrapper = styled.div`
  svg {
    height: auto;
    width: 100%;
  }
`;

export const TourHeroCard: FC<TourHeroCardProps> = ({
  heading,
  price,
  mapImage,
}) => {
  return (
    <Wrapper>
      <Header>
        <Box mr={6}>
          <Typography variant="h4" component="h2">
            {heading}
          </Typography>
        </Box>
        <Box>{price ? <PriceBlock price={price} /> : null}</Box>
      </Header>
      <MapWrapper>
        <TempMap />
      </MapWrapper>
    </Wrapper>
  );
};

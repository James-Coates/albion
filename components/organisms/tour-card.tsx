import { Box, BoxProps, Typography } from '@material-ui/core';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { Card } from '../molecules/card';
import MapSvg from '../../public/images/map-temp.svg';
import { transparentize } from 'polished';
import { PriceBlock } from '@components/molecules/price-block';
import Image from 'next/image';
import { Backdrop } from '@components/molecules';
import { BackgroundImage } from '@components/molecules/background-image';

interface TourCardProps extends BoxProps {
  image: any;
  name: string;
  price?: number;
}

const Footer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(4px);

  ${({ theme }) => css`
    background-color: ${transparentize(
      0.6,
      theme.palette.primary.dark,
    )};
  `}
`;

const FooterContent = styled.div`
  flex: 1;
  padding: ${({ theme }) =>
    `${theme.spacing(1)} ${theme.spacing(2)}`};
`;

const FooterMap = styled.div`
  flex: 0 0 140px;
  height: 140px;
  padding-right: ${({ theme }) => theme.spacing(2)};

  svg {
    height: 100%;
    width: auto;
  }
`;

export const TourCard: FC<TourCardProps> = ({
  image,
  name,
  price,
  ...props
}) => (
  <Card variant="dark" {...props}>
    <Backdrop hoverEffect />
    <BackgroundImage src={image} zIndex={-2} />
    <Footer>
      <FooterContent>
        <Box maxWidth="24rem" mb={2} height="6rem">
          <Typography variant="h4">{name}</Typography>
        </Box>
        {price ? <PriceBlock price={price} /> : null}
      </FooterContent>
      <FooterMap>
        <MapSvg />
      </FooterMap>
    </Footer>
  </Card>
);

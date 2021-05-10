import {
  Box,
  BoxProps,
  Container,
  Typography,
} from '@material-ui/core';
import styled, { css } from 'styled-components';
import { ChevronThinDown } from '@styled-icons/entypo/ChevronThinDown';
import { linearGradient, rgba } from 'polished';

import { TourHeroCard } from '@components/molecules/tour-hero-card';
import { BackgroundImage, Backdrop } from '@components/molecules';

interface HeroProps extends BoxProps {
  backgroundImage: string | null;
  destinations: string;
  price: number;
  handleScrollButtonClick?: () => any;
}

const Wrapper = styled(Box)`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const VideoBg = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: -2;
`;

const Content = styled(Box)`
  position: absolute;
  /* max-width: 720px; */
  top: 50%;
  left: 16px;
  right: 16px;
  transform: translateY(-50%);
  text-shadow: 0px 0px 32px rgba(0, 0, 0, 0.4);
  justify-content: space-around;

  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      transform: none;
      top: 25%;
      left: 0;
      right: 0;
    }
  `}
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto;
`;

const HeaderBox = styled.div`
  flex: 1 0 40%;
  max-width: 600px;
`;

const CardBox = styled.div`
  flex: 1 0 40%;
  max-width: 520px;
  margin-top: 24em;
`;

const ScrollButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 16px;
  color: white;
`;

const Transition = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  z-index: -1;
  ${({ theme }) =>
    linearGradient({
      colorStops: [
        `${rgba(theme.palette.primary.dark, 0)} 0%`,
        `${rgba(theme.palette.primary.dark, 1)} 100%`,
      ],
      toDirection: 'to bottom',
    })}
`;

export const TourHero = ({
  id,
  backgroundImage,
  destinations,
  price,
  children,
  handleScrollButtonClick,
}: HeroProps) => (
  <Wrapper color="common.white">
    <Backdrop opacity={0.6} />
    {backgroundImage ? (
      <BackgroundImage
        src={backgroundImage}
        objectFit="cover"
        zIndex="-2"
      />
    ) : null}
    <Content>
      <Container maxWidth="xl">
        <ContentWrap>
          <HeaderBox>{children}</HeaderBox>
          <CardBox>
            {id}
            <TourHeroCard
              heading={destinations}
              price={price}
            ></TourHeroCard>
          </CardBox>
        </ContentWrap>
      </Container>
    </Content>

    <ScrollButton onClick={handleScrollButtonClick}>
      <Box position="relative">
        <Typography variant="body2">Find out more</Typography>
        <ChevronThinDown height={24} />
      </Box>
    </ScrollButton>
  </Wrapper>
);

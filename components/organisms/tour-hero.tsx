import React from 'react';
import styled, { css } from 'styled-components';
// Internal
import {
  Backdrop,
  BackgroundImage,
  ScrollButton,
} from '@components/atoms';
import { BlockContent } from '@components/molecules';
// External
import { Box, Typography } from '@material-ui/core';
import { Tour } from '@type/tour';
import { urlFor } from 'sanity-client.config';

interface TourHeroProps {
  tour: Tour;
  handleScrollButtonClick?: () => any;
}

const Wrapper = styled(Box)`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Content = styled(Box)`
  max-width: 900px;
  padding: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      margin-left: 10%;
      padding-top: 15%;
    }
  `};
`;

const ScrollButtonContainer = styled.div`
  position: absolute;
  bottom: 32px;
  right: 32px;
  padding: 16px;
  color: white;
`;

export const TourHero: React.FC<TourHeroProps> = ({
  tour,
  handleScrollButtonClick,
}) => (
  <Wrapper color="common.white">
    <Backdrop zIndex={-1} opacity={0.5} />
    <BackgroundImage
      src={urlFor(tour.mainImage).url() || ''}
      objectFit="cover"
      zIndex="-2"
    />
    <InnerWrapper>
      <Content>
        <Typography variant="overline" gutterBottom>
          {tour.destinations}
        </Typography>
        <Typography variant="h2" gutterBottom component="h1">
          {tour.title}
        </Typography>

        {tour.summary ? (
          <BlockContent blocks={tour.summary}></BlockContent>
        ) : null}

        {/* <PlayButton></PlayButton>
        <Box mt={2}>
          <Typography variant="overline">
            Preview the experience
          </Typography>
        </Box> */}
      </Content>

      <ScrollButtonContainer onClick={handleScrollButtonClick}>
        <ScrollButton>Find out more</ScrollButton>
      </ScrollButtonContainer>
    </InnerWrapper>
  </Wrapper>
);

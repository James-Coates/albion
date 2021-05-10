import React from 'react';
import styled, { css } from 'styled-components';
// Internal
import { Backdrop, ScrollButton } from '@components/atoms';
import {
  VideoCover,
  PlayButton,
  BlockContent,
  BlockContentProps,
} from '@components/molecules';
// External
import { Box, Typography } from '@material-ui/core';

interface LandingHeroProps {
  handleScrollButtonClick?: () => any;
  mainHeading: string;
  mainCopy?: BlockContentProps | null;
}

const Wrapper = styled(Box)`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Content = styled(Box)`
  max-width: 900px;
  text-align: center;

  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      padding-top: 80px;
    }
  `}
`;

const ScrollButtonContainer = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
  right: 0;
  padding: 16px;
  color: white;
`;

export const LandingHero: React.FC<LandingHeroProps> = ({
  mainHeading,
  mainCopy,
  handleScrollButtonClick,
}) => (
  <Wrapper color="common.white">
    <Backdrop zIndex={-1} opacity={0.5} />
    <VideoCover autoPlay muted loop zIndex={-2}>
      <source src="video/albion.mp4"></source>
    </VideoCover>
    <InnerWrapper>
      <Content>
        <Typography variant="h1" gutterBottom>
          {mainHeading}
        </Typography>

        {mainCopy ? (
          <BlockContent blocks={mainCopy}></BlockContent>
        ) : null}

        <PlayButton></PlayButton>
        <Box mt={2}>
          <Typography variant="overline">
            Preview the experience
          </Typography>
        </Box>
      </Content>

      <ScrollButtonContainer onClick={handleScrollButtonClick}>
        <ScrollButton>Explore our tours</ScrollButton>
      </ScrollButtonContainer>
    </InnerWrapper>
  </Wrapper>
);

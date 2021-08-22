import React, { useRef, useState } from 'react';
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
import { Modal } from '@components/molecules/modal';
import YouTube from 'react-youtube';

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

const VideoWrapper = styled.div`
  position: relative;

  height: 100%;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

export const LandingHero: React.FC<LandingHeroProps> = ({
  mainHeading,
  mainCopy,
  handleScrollButtonClick,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlayClick() {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setModalOpen(true);
  }

  function onModalCloseClick() {
    setModalOpen(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  return (
    <Wrapper color="common.white">
      <Modal active={modalOpen} onCloseClick={onModalCloseClick}>
        <VideoWrapper>
          {modalOpen ? (
            <YouTube
              videoId="68XZgPMLp50"
              opts={{ width: '100%', height: '100%' }}
            />
          ) : null}
        </VideoWrapper>
      </Modal>
      <Backdrop zIndex={-1} opacity={0.5} />
      <VideoCover autoPlay muted loop zIndex={-2} ref={videoRef}>
        <source src="video/albion.mp4"></source>
      </VideoCover>
      <InnerWrapper>
        <Content>
          <Typography variant="h1" gutterBottom>
            {mainHeading}
          </Typography>

          <Box maxWidth={540} margin="0 auto 64px">
            {mainCopy ? (
              <BlockContent blocks={mainCopy}></BlockContent>
            ) : null}
          </Box>

          <button onClick={handlePlayClick}>
            <PlayButton></PlayButton>
          </button>
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
};

import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { linearGradient, rgba } from 'polished';
import { ChevronThinDown } from '@styled-icons/entypo/ChevronThinDown';
import { serializers } from '../../sanity-client.config';
import BlockContent, {
  BlockContentProps,
} from '@sanity/block-content-to-react';
import { fill } from '@lib/styled-components/utils';
import Image, { ImageProps } from 'next/image';
import { VideoCover } from '@components/molecules/video-cover';
import { Box, BoxProps, Typography } from '@material-ui/core';

interface LandingHeroProps {
  backgroundImage: string | null;
  handleScrollButtonClick?: () => any;
  mainHeading: string;
  mainCopy?: BlockContentProps | null;
  video?: boolean;
  transition?: boolean;
}

interface WrapperProps extends BoxProps {
  $transition: boolean | undefined;
}

const Wrapper = styled(Box)<WrapperProps>`
  position: relative;
  height: 100vh;
  overflow: hidden;

  ${({ theme, $transition }) =>
    $transition
      ? css`
          height: calc(100vh + 140px);

          ${Content} {
            ${theme.breakpoints.up('md')} {
              bottom: 240px;
            }
          }
          ${ScrollButton} {
            bottom: 160px;
          }
        `
      : null}
`;

const Backdrop = styled.div`
  ${fill()}
  z-index: -1;
  background: rgba(0, 0, 0, 0.4);
  /* background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.15) 20%,
    rgba(0, 0, 0, 0.15) 100%
  ); */
`;

const Content = styled(Box)`
  position: absolute;
  max-width: 720px;
  top: 50%;
  left: 16px;
  right: 16px;
  transform: translateY(-50%);
  text-shadow: 0px 0px 32px rgba(0, 0, 0, 0.4);

  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      transform: translateX(-50%);
      top: auto;
      bottom: 10vh;
      left: 50%;
      text-align: center;
    }
  `}
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

const BackgroundImage = styled(Image)<ImageProps>`
  z-index: -1;
`;

const BackgroundVideo = styled(VideoCover)`
  z-index: -2;
`;

export const LandingHero: React.FC<LandingHeroProps> = ({
  mainHeading,
  mainCopy,
  backgroundImage,
  video,
  transition,
  handleScrollButtonClick,
}) => (
  <Wrapper color="common.white" $transition={transition}>
    <Backdrop />
    {/* {backgroundImage ? (
      <BackgroundImage
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
      />
    ) : null} */}
    {video ? (
      <BackgroundVideo muted loop autoPlay>
        <source src="/video/albion.mp4"></source>
      </BackgroundVideo>
    ) : null}
    <Content>
      <motion.div
        initial={{ opacity: 0, y: '5rem' }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
      >
        <Box>
          <Typography variant="h1" gutterBottom>
            {mainHeading}
          </Typography>

          {mainCopy ? (
            <BlockContent
              blocks={mainCopy}
              serializers={serializers}
            ></BlockContent>
          ) : null}
        </Box>
      </motion.div>
    </Content>
    {transition ? <Transition /> : null}

    <ScrollButton onClick={handleScrollButtonClick}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, delay: 2 },
        }}
      >
        <Box position="relative">
          <Typography variant="body2">Find out more</Typography>
          <ChevronThinDown height={24} />
        </Box>
      </motion.div>
    </ScrollButton>
  </Wrapper>
);

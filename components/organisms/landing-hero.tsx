import { Box, BoxProps, Typography } from '@material-ui/core';
import { up } from 'styled-breakpoints';
import styled, { css } from 'styled-components';
import { fill } from '../../theme/helpers';
import { Svg } from '../atoms';
import { BackgroundImage } from '../molecules';
import { ChevronThinDown } from '@styled-icons/entypo/ChevronThinDown';
import Fade from 'react-reveal/Fade';
import { linearGradient, rgba } from 'polished';
import { serializers } from '../../sanity-client.config';
import BlockContent, {
  BlockContentProps,
} from '@sanity/block-content-to-react';
import { Theme } from 'theme/theme';

interface HeroProps extends BoxProps {
  backgroundImage: string | null;
  handleScrollButtonClick?: () => any;
  mainHeading: string;
  mainCopy?: BlockContentProps | null;
  video?: boolean;
  transition?: boolean;
}

interface WrapperProps extends BoxProps {
  $transition: boolean;
}

// const transitionWrapperStyles = (theme: Theme, transition: boolean) => css`
//   height: calc(100vh + 140px);
// `

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
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.15) 20%,
    rgba(0, 0, 0, 0.15) 100%
  );
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

export const LandingHero = ({
  mainHeading,
  mainCopy,
  backgroundImage,
  video,
  transition,
  handleScrollButtonClick,
}: HeroProps) => (
  <Wrapper color="common.white" $transition={transition}>
    <Backdrop />
    {backgroundImage ? (
      <BackgroundImage
        zIndex={-2}
        src={backgroundImage}
      ></BackgroundImage>
    ) : null}
    {video ? (
      <VideoBg muted loop autoPlay>
        <source src="/video/albion.mp4"></source>
      </VideoBg>
    ) : null}
    <Content>
      <Fade bottom delay={600} duration={1000}>
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
      </Fade>
    </Content>
    {transition ? <Transition /> : null}

    <ScrollButton onClick={handleScrollButtonClick}>
      <Box position="relative">
        <Typography variant="body2">Find out more</Typography>
        <ChevronThinDown height={24} />
      </Box>
    </ScrollButton>
  </Wrapper>
);

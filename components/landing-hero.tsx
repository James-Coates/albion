import styled from 'styled-components';
import { fill } from '../styles/helpers';
import { Box, BoxProps } from './base/box';

interface HeroProps extends BoxProps {
  backgroundImage: string;
}

const Wrapper = styled(Box)`
  position: relative;
  height: 100vh;
  color: white;
  overflow: hidden;
`;

const Backdrop = styled.div`
  ${fill()}
  z-index: -1;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.6) 90%,
    rgba(0, 0, 0, 0.6) 100%
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
  top: 50%;
  left: 20%;
  max-width: 520px;
  transform: translateY(-50%);
`;

export const LandingHero = ({
  children,
  backgroundImage,
}: HeroProps) => (
  <Wrapper>
    <Backdrop />
    <VideoBg muted loop autoPlay poster={backgroundImage}>
      {/* <source src="/video/albion.mp4"></source> */}
    </VideoBg>
    <Content>{children}</Content>
  </Wrapper>
);

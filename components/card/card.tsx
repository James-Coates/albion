import Link from 'next/link';
import styled from 'styled-components';
import { Box, BoxProps, Heading } from '../base';
import { Img } from '../base/image';
import { CardFooter } from './card-footer';

export interface CardProps extends BoxProps {
  data: any;
}

const CardWrapper = styled(Box)`
  position: relative;
  z-index: 0;
  padding: 24px;
  height: 520px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07),
    0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
    0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
    0 32px 64px rgba(0, 0, 0, 0.07);
  color: white;
  cursor: pointer;
  overflow: hidden;

  ${Heading} {
    font-size: 36rem;
  }
`;

// const CardBackground = styled(Box)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   ${({ image }) => `background-image: url(${image})`};
//   background-position: center;
//   background-size: cover;
//   z-index: -2;
//   transition: 600ms;
//   ${CardWrapper}:hover & {
//     transform: scale(1.05);
//   }
// `;

const CardBackground = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  transition: 600ms;
  ${CardWrapper}:hover & {
    transform: scale(1.05);
  }
`;

const CardBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  z-index: -1;
  opacity: 0.2;
  transition: 600ms;

  ${CardWrapper}:hover & {
    opacity: 0.1;
  }
`;

export const Card = ({ data, ...props }) => (
  <CardWrapper {...props}>
    {/* <CardBackground image={data.image} /> */}
    <CardBackground src={data.image} layout="fill" />
    <CardBackdrop />
    <Heading level={3}>{data.title}</Heading>
    <CardFooter data={data} />
    <Link href={`/tours/${data.id}`}>
      <a>Go</a>
    </Link>
  </CardWrapper>
);

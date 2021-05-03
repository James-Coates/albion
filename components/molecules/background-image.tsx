import { Box, BoxProps } from '@material-ui/core';
import Image, { ImageProps } from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface BackgroundImageProps extends BoxProps {
  src: string;
  objectFit?: 'fill' | 'cover';
}

const Wrapper = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  objectFit,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <Image src={src} layout="fill" objectFit={objectFit} />
    </Wrapper>
  );
};

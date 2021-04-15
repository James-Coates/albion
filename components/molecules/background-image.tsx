import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
import { position, PositionProps } from 'styled-system';

interface BackgroundImageProps {
  src: string;
  zIndex?: number;
  alt?: string;
}

const Wrapper = styled.div<{ zIndex: number }>`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  ${position}
`;

export const BackgroundImage: FC<BackgroundImageProps> = ({
  zIndex,
  ...props
}) => (
  <Wrapper zIndex={zIndex}>
    <Image {...props} layout="fill" objectFit="cover" />
  </Wrapper>
);

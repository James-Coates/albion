import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Slide } from '../../../types/slide';
import { Box, Typography } from '@material-ui/core';

interface TourSlideProps {
  slide: Slide;
}

const ImageWrapper = styled(Box)`
  position: absolute;
  top: 30%;
  left: 50%;
  height: 600px;
  width: 800px;
`;

export const TourSlide: FC<TourSlideProps> = ({ slide }) => (
  <Box height="80vh">
    <Box width="500px" position="absolute" top="40%" left="200px">
      <Typography variant="h2">{slide.title}</Typography>
      {slide.description
        ? slide.description.map((item, i) => (
            <Typography key={i}>{item}</Typography>
          ))
        : null}
    </Box>
    <ImageWrapper>
      <Image
        src={slide.image.url}
        alt={slide.image.title}
        layout="fill"
      ></Image>
    </ImageWrapper>
  </Box>
);

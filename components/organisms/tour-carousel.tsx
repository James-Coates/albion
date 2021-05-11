import { BackgroundImage } from '@components/atoms';
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface TourCarouselProps {}

const slides = {
  summary:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A tenetur animi culpa fugiat temporibus dicta iste et. Rem, architecto nisi!',
  images: [
    {
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, rem!',
      url: 'https://source.unsplash.com/400x800',
      type: 'narrow',
    },
    {
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, rem!',
      url: 'https://source.unsplash.com/800x400',
      type: 'wide',
    },
    {
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, rem!',
      url: 'https://source.unsplash.com/400x800',
      type: 'narrow',
    },
    {
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, rem!',
      url: 'https://source.unsplash.com/800x400',
      type: 'wide',
    },
  ],
};

const Wrapper = styled(SwiperSlide)`
  padding: 20vh 0;
  background-color: #efefef;
  .swiper-slide {
    width: auto;

    img {
      height: 100%;
      width: auto;
    }
  }
`;

const TourCarouselImageBox = styled.div``;

export const TourCarousel: React.FC = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Wrapper>
      {!mdUp ? (
        <Typography variant="body1">{slides.summary}</Typography>
      ) : null}
      <Swiper slidesPerView="auto" spaceBetween={40}>
        <SwiperSlide>
          <Box
            width="60vw"
            height="80vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="10%"
          >
            <Typography variant="subtitle1">
              {slides.summary}
            </Typography>
          </Box>
        </SwiperSlide>
        {slides.images.map((image) => (
          <SwiperSlide>
            <Box height="80vh">
              <Box pr={image.type === 'wide' ? '120vh' : '54vh'}>
                <BackgroundImage
                  src={image.url}
                  objectFit="cover"
                  zIndex="-1"
                />
                <Typography variant="body1">{image.title}</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

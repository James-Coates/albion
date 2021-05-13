import { BackgroundImage } from '@components/atoms';
import { CarouselCard } from '@components/molecules/carousel-card';
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowLeft, ArrowRight } from '@styled-icons/bootstrap';
import { CarouselNavigationButton } from '@components/molecules/carousel-navigation-button';

interface TourCarouselProps {}

SwiperCore.use([Navigation]);

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
  background-color: ${({ theme }) =>
    theme.palette.background.default};
  position: relative;

  .swiper-container {
    padding-left: 16px;
    padding-right: 16px;
  }
  .swiper-slide {
    width: auto;

    img {
      height: 100%;
      width: auto;
    }
  }
`;

export const TourCarousel: React.FC = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('sm'));
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  return (
    <Wrapper>
      {!mdUp ? (
        <Container>
          <Box mb={4}>
            <Typography variant="subtitle1">
              {slides.summary}
            </Typography>
          </Box>
        </Container>
      ) : null}
      <Swiper
        slidesPerView="auto"
        spaceBetween={mdUp ? 40 : 10}
        freeMode={true}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
      >
        {mdUp ? (
          <SwiperSlide>
            <CarouselCard type="wide">
              <Box top="25%" left="25%" padding="10%" width="50%">
                <Typography variant="subtitle1">
                  {slides.summary}
                </Typography>
              </Box>
            </CarouselCard>
          </SwiperSlide>
        ) : null}

        {slides.images.map((image, i) => (
          <SwiperSlide key={i}>
            <CarouselCard type={image.type}>
              <BackgroundImage
                src={image.url}
                objectFit="cover"
                zIndex="-1"
              />
              {/* <Typography variant="body1">{image.title}</Typography> */}
            </CarouselCard>
          </SwiperSlide>
        ))}

        <CarouselNavigationButton direction="left" ref={prevRef}>
          <ArrowLeft />
        </CarouselNavigationButton>
        <CarouselNavigationButton direction="right" ref={nextRef}>
          <ArrowRight />
        </CarouselNavigationButton>
      </Swiper>
    </Wrapper>
  );
};

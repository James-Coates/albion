import { Box, Grid, Typography } from '@material-ui/core';
import Image, { ImageProps } from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const fakeData = [
  {
    heading: 'Lorem ipsum',
    copy: 'lorem ipsum',
    image: 'https://source.unsplash.com/random',
  },
  {
    heading: 'Lorem ipsum',
    copy: 'lorem ipsum',
    image: 'https://source.unsplash.com/random',
  },
];

interface TourSliderProps {
  slides?: any;
}

SwiperCore.use([EffectFade, Navigation, Pagination]);

const SlideWrapper = styled.div`
  min-height: 90vh;
  position: relative;
  z-index: 0;
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

const Background = styled(Image)<ImageProps>`
  z-index: -1;
`;

const Content = styled.div`
  position: absolute;
  bottom: 80px;
  max-width: 800px;
  width: 100%;
  min-height: 400px;
  left: 128px;
  background-color: white;
  backdrop-filter: 16px;
  padding: 64px;
`;

export const TourDetailsSlider: FC<TourSliderProps> = ({
  slides,
}) => (
  <Swiper
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    effect={'fade'}
    fadeEffect={{ crossFade: true }}
  >
    {fakeData.map((slide, i) => (
      <SwiperSlide key={i}>
        <SlideWrapper>
          <Background
            src={slide.image}
            objectFit="cover"
            layout="fill"
          />
          <Content>
            <Box mb={3}>
              <Typography
                component="h2"
                variant="h3"
                color="primary"
                gutterBottom
              >
                {slide.heading}
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                gutterBottom
              >
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nesciunt nobis animi sunt odio dignissimos quam
                dolor quidem omnis. Nulla, neque.
              </Typography>
            </Box>
            <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ab nam et debitis! Qui modi animi soluta corrupti
              temporibus adipisci sapiente fugit vero exercitationem
              est.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique a at ipsam, sit rerum maiores odit delectus
              alias ab ipsa dignissimos aliquam officia ducimus, ut
              molestias eveniet non sapiente doloribus? Voluptatum,
              qui esse? Quae, obcaecati. Obcaecati, porro deserunt.
              Voluptatum, autem?
            </Typography>
          </Content>
        </SlideWrapper>
        {/* <TourSlide slide={slide} /> */}
      </SwiperSlide>
    ))}
  </Swiper>
);

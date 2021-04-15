import { Box } from '@material-ui/core';
import { FC } from 'react';
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from '../../../models/slide.model';
import { TourSlide } from './tour-slide';

interface TourSliderProps {
  slides: Slide[];
}

SwiperCore.use([EffectFade, Navigation, Pagination]);

export const TourSlider2: FC<TourSliderProps> = ({ slides }) => (
  <Box height="100vh">
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      effect={'fade'}
      fadeEffect={{ crossFade: true }}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <TourSlide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
);

import { FC, useRef } from 'react';
import styled, { css } from 'styled-components';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavigationOptions } from 'swiper/types/components/navigation';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { urlFor } from '../../sanity-client.config';
import { Tour } from '../../types/tour';
import { TourCard } from './tour-card';
import { ArrowLeft, ArrowRight } from '@styled-icons/bootstrap';
import theme from '../../theme/theme';
import { Typography } from '@material-ui/core';
import Link from 'next/link';

interface TourSliderProps {
  tours: Tour[];
}

const TestSwiper = styled(Swiper)`
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => css`
    ${theme.breakpoints.up('lg')} {
      padding-left: 200px;
    }
  `}
`;

const Card = styled(TourCard)`
  height: 42rem;

  /* ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      height: 42rem;
    }
  `} */
`;

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const ControlsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: ${({ theme }) => theme.spacing(8)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const NavigationButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.palette.grey[200]};

  svg {
    height: 24px;
  }
`;

const PaginationContainer = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  margin-top: 1px;

  .swiper-pagination-bullet {
    width: 48px;
    border-radius: 0;
    background-color: ${({ theme }) => theme.palette.secondary.main};
    margin: 0 0.5em;
  }
`;

export const TourSlider: FC<TourSliderProps> = ({ tours }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  const breakpointsOptions = {
    [theme.breakpoints.xs]: {
      slidesPerView: 1,
    },
    [theme.breakpoints.sm]: {
      slidesPerView: 1.3,
    },
    [theme.breakpoints.md]: {
      slidesPerView: 2.3,
    },
  };

  const onBeforeInit = (Swiper: SwiperCore): void => {
    const navigation = Swiper.params.navigation as NavigationOptions;
    navigation.prevEl = prevRef.current;
    navigation.nextEl = nextRef.current;

    const pagination = Swiper.params.pagination as PaginationOptions;
    pagination.el = paginationRef.current;
    pagination.clickable = true;
  };

  return (
    <TestSwiper
      spaceBetween={40}
      navigation={{
        nextEl: nextRef.current,
        prevEl: prevRef.current,
      }}
      pagination={{ el: paginationRef.current }}
      onBeforeInit={onBeforeInit}
      breakpoints={breakpointsOptions}
    >
      {tours.map((tour) => (
        <SwiperSlide key={tour._id}>
          <Link href={`/tours/${tour.slug}`}>
            <a>
              <Card
                name={tour.title}
                image={urlFor(tour.image).url()}
                price={tour.price}
              />
            </a>
          </Link>
        </SwiperSlide>
      ))}
      <ControlsContainer slot="container-start">
        <NavigationButton ref={prevRef}>
          <ArrowLeft />
        </NavigationButton>
        <PaginationContainer
          ref={paginationRef}
        ></PaginationContainer>
        <NavigationButton ref={nextRef}>
          <ArrowRight />
        </NavigationButton>
      </ControlsContainer>
    </TestSwiper>
  );
};

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
import {
  BlockContent,
  CarouselCardHeader,
  CarouselCardText,
  CarouselNavigationButton,
} from '@components/molecules';
import { CustomImage } from '@type/custom-image';
import { fixedSerializers, urlFor } from 'sanity-client.config';
import { BlockContentProps } from '@sanity/block-content-to-react';

interface TourCarouselProps {
  heading?: string;
  summary?: BlockContentProps;
  images?: CustomImage[];
}

SwiperCore.use([Navigation]);

const Wrapper = styled(Box)`
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

export const TourCarousel: React.FC<TourCarouselProps> = ({
  images,
  summary,
  heading,
}) => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('sm'));
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  return (
    <Wrapper color="text.primary">
      {!mdUp ? (
        <Container>
          <Box mb={4}>
            <Typography variant="h3" component="h2" gutterBottom>
              {heading}
            </Typography>
            <BlockContent
              blocks={summary}
              serializers={fixedSerializers('subtitle1')}
            ></BlockContent>
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
              <CarouselCardText>
                <Typography variant="h3" component="h2" gutterBottom>
                  {heading}
                </Typography>
                <BlockContent
                  blocks={summary}
                  serializers={fixedSerializers('subtitle1')}
                ></BlockContent>
              </CarouselCardText>
            </CarouselCard>
          </SwiperSlide>
        ) : null}

        {images
          ? images.map((image, i) => (
              <SwiperSlide key={i}>
                <CarouselCard type={image.type}>
                  <BackgroundImage
                    src={urlFor(image.image).url() || ''}
                    objectFit="cover"
                    zIndex="-1"
                  />
                  <CarouselCardHeader>
                    <Typography variant="overline">
                      {image.title}
                    </Typography>
                  </CarouselCardHeader>
                </CarouselCard>
              </SwiperSlide>
            ))
          : null}

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

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import styled, { css } from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import { Backdrop, BackgroundImage } from '@components/atoms';
import { Testimonial } from '@type/testimonial';
import { urlFor } from 'sanity-client.config';

const dummy = [
  {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsa odit iusto laborum, minima ex molestias quae dolorem cumque nihil rem debitis quos quasi labore velit asperiores! Quo autem libero iste tenetur, dolor quas. In accusantium pariatur officiis quam dolore.',
    owner: 'Joe',
    source: 'A Tripadvisor review',
    image: 'https://source.unsplash.com/random',
  },
  {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsa odit iusto laborum, minima ex molestias quae dolorem cumque nihil rem debitis quos quasi labore velit asperiores! Quo autem libero iste tenetur, dolor quas. In accusantium pariatur officiis quam dolore.',
    owner: 'Joe',
    source: 'A Tripadvisor review',
    image: 'https://source.unsplash.com/random',
  },
  {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsa odit iusto laborum, minima ex molestias quae dolorem cumque nihil rem debitis quos quasi labore velit asperiores! Quo autem libero iste tenetur, dolor quas. In accusantium pariatur officiis quam dolore.',
    owner: 'Joe',
    source: 'A Tripadvisor review',
    image: 'https://source.unsplash.com/random',
  },
];

interface TestimonialsProps {
  testimonials: Testimonial[];
}

SwiperCore.use([Pagination, Autoplay]);

const TestimonialSlide = styled.div`
  height: 90vh;
  position: relative;
  z-index: 0;

  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      height: 75vh;
    }
  `}
`;
const Wrapper = styled.div`
  .swiper-pagination {
    bottom: 24px;
  }
  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.palette.secondary.main};
    border-radius: 0;
    width: 64px;
    height: 6px;
  }
`;
const Content = styled.div`
  position: absolute;
  max-width: 960px;
  width: 95%;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.palette.common.white};
  text-align: center;
  ${({ theme }) => css`
    ${theme.breakpoints.up('lg')} {
      top: 55%;
    }
  `}
`;

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
}) => {
  return (
    <Wrapper>
      <Swiper
        pagination={{ clickable: true }}
        loop
        spaceBetween={0}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <TestimonialSlide>
              <BackgroundImage
                src={
                  urlFor(testimonial.image).size(1800, 750).url() ||
                  ''
                }
                objectFit="cover"
                zIndex={-2}
              />
              <Backdrop zIndex={-1} opacity={0.5} />
              <Content>
                <Typography variant="subtitle1" gutterBottom>
                  {testimonial.content}
                </Typography>
                <Typography variant="overline">
                  {testimonial.owner} - {testimonial.source}
                </Typography>
              </Content>
            </TestimonialSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

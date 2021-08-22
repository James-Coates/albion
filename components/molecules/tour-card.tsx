import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
// Helpers
import { urlFor } from 'sanity-client.config';
// Internal
import { Backdrop, BackgroundImage } from '@components/atoms';
import { Card } from './card';
// External
import { Box, Typography } from '@material-ui/core';
// Types
import { Tour } from '@type/tour';
import { fill } from '@lib/styled-components/utils';
import Image from 'next/image';

interface TourCardProps {
  tour: Tour;
}

const CardBackgroundWrapper = styled.div`
  position: absolute;
  z-index: -1;
  overflow: hidden;
  ${fill()}
`;
const CardBackground = styled(motion.div)`
  z-index: -2;
  position: relative;
`;
const CardBackdrop = styled(motion.div)`
  position: absolute;
  background-color: #000;
  z-index: -1;
  ${fill()}
`;

const PriceWrapper = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  color: ${({ theme }) => theme.palette.common.white};
`;

const HeadingWrapper = styled.div`
  position: absolute;
  bottom: 2em;
  left: 2em;
  color: ${({ theme }) => theme.palette.common.white};
`;

const backdropMotion: Variants = {
  rest: { opacity: 0.25, transition: { duration: 0.6 } },
  hover: { opacity: 0.05, transition: { duration: 0.6 } },
};

const backgroundMotion: Variants = {
  rest: { scale: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.02, transition: { duration: 0.6 } },
};

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <motion.div whileHover="hover" animate="rest" initial="rest">
      <Card>
        <CardBackground variants={backgroundMotion}>
          <Image
            src={
              urlFor(tour.mainImage)
                .size(1200, 1000)
                .quality(100)
                .url() || ''
            }
            layout="responsive"
            width="1200"
            height="1000"
          ></Image>
        </CardBackground>
        <CardBackdrop variants={backdropMotion}></CardBackdrop>
        <PriceWrapper>
          <Typography variant="overline">
            From £{tour.price} pp
          </Typography>
        </PriceWrapper>
        <HeadingWrapper>
          <Box maxWidth="600px">
            <Typography variant="overline">
              {tour.destinations}
            </Typography>
            <Typography variant="h3">{tour.title}</Typography>
          </Box>
        </HeadingWrapper>
      </Card>
    </motion.div>
  );
};

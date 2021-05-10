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
  position: absolute;
  ${fill()}
`;
const CardBackdrop = styled(motion.div)`
  position: absolute;
  background-color: #000;
  z-index: -1;
  ${fill()}
`;

const backdropMotion: Variants = {
  rest: { opacity: 0.2, transition: { duration: 0.6 } },
  hover: { opacity: 0.1, transition: { duration: 0.6 } },
};

const backgroundMotion: Variants = {
  rest: { scale: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.02, transition: { duration: 0.6 } },
};

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <motion.div whileHover="hover" animate="rest" initial="rest">
      <Card>
        <CardBackgroundWrapper>
          <CardBackground variants={backgroundMotion}>
            <BackgroundImage
              src={urlFor(tour.mainImage).url() || ''}
              objectFit="cover"
            />
          </CardBackground>
        </CardBackgroundWrapper>
        <CardBackdrop variants={backdropMotion}></CardBackdrop>
        <Box
          display="flex"
          flexDirection="column"
          color="white"
          height="60vh"
          justifyContent="space-between"
        >
          <Box textAlign="right">
            <Typography variant="overline">
              From £{tour.price} pp
            </Typography>
          </Box>
          <Box mb={4} maxWidth="600px">
            <Typography variant="overline">
              {tour.destinations}
            </Typography>
            <Typography variant="h3">{tour.title}</Typography>
          </Box>
        </Box>
      </Card>
    </motion.div>
  );
};

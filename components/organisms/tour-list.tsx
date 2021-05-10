import React from 'react';
import Link from 'next/link';
// Internal
import { TourCard } from '@components/molecules';
// External
import { Box, Grid } from '@material-ui/core';
import { FadeOnScroll } from '@components/animations';
// Types
import { Tour } from '@type/tour';

interface TourListProps {
  tours: Tour[];
}

export const TourList: React.FC<TourListProps> = ({ tours }) => {
  return (
    <Grid container spacing={4}>
      {tours.map((tour) => (
        <Grid item md={6} key={tour._id}>
          <FadeOnScroll>
            <Box>
              <Link href={`/tours/${tour.slug}`}>
                <a>
                  <TourCard tour={tour} />
                </a>
              </Link>
            </Box>
          </FadeOnScroll>
        </Grid>
      ))}
    </Grid>
  );
};

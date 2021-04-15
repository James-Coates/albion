import { Grid, Slide, Typography } from '@material-ui/core';
import Link from 'next/link';
import { FC, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { isOdd } from '../../helpers';
import { Tour } from '../../models';
import { Box } from '../atoms/box';
import { Card } from '../molecules';
import { TourCardFooter } from '../molecules/tour-card-footer';
import Fade from 'react-reveal/Fade';

interface TourListProps {
  tours: Tour[];
}

const marginTop = (i) => ({ xs: 0, md: isOdd(i) ? '200px' : null });
const marginBottom = (i) => ({
  xs: 0,
  md: isOdd(i) ? '-200px' : null,
});

export const TourList: FC<TourListProps> = ({ tours }) => {
  if (!tours) return <div>Loading...</div>;

  function onchange(i) {
    console.log(i);
  }

  return (
    <Grid container spacing={6}>
      {tours.map((tour, i) => (
        <Test tour={tour} index={i} key={i} />
      ))}
    </Grid>
  );
};

function Test({ tour, index }) {
  return (
    <Grid item xs={12} md={6} lg={5}>
      <Box
        marginTop={marginTop(index)}
        marginBottom={marginBottom(index)}
      >
        <Link href={`/tours/${tour.slug}`}>
          <a>
            <Fade bottom delay={500} duration={1000}>
              <Box>
                <Card
                  height={{ xs: '60vh', md: 560 }}
                  marginBottom={`${marginBottom(index)}px`}
                  backgroundUrl={tour.image}
                >
                  <Typography variant="h3">{tour.title}</Typography>
                  <TourCardFooter price={tour.price} />
                </Card>
              </Box>
            </Fade>
          </a>
        </Link>
      </Box>
    </Grid>
  );
}

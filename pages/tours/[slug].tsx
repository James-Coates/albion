import React, { useEffect } from 'react';
// Internal
import { Section, Timeline } from '@components/molecules';
import { TourHero } from '@components/organisms';
import { Layout } from '@components/layouts';
import { useLayoutDispatch } from '@state/layout/layout-state';
// External
import { Box, Container, Grid, Typography } from '@material-ui/core';
// Types
import { Tour } from '@type/tour';
// API
import { getAllTours, getTourFromSlug } from '@api/tours';
import { TourCarousel } from '@components/organisms/tour-carousel';
import { TourMap } from '@components/molecules/tour-map';

interface TourPgaeProps {
  tour: Tour;
}

const TourPage: React.FC<TourPgaeProps> = ({ tour }) => {
  const dispatch = useLayoutDispatch();

  const setHeaderFloat = (float: boolean): void =>
    dispatch({
      type: 'setHeaderFloat',
      payload: float,
    });

  useEffect(() => {
    setHeaderFloat(false);
  }, []);

  return (
    <Layout>
      <TourHero tour={tour} />
      <TourCarousel />
      <Box position="relative">
        <Grid container>
          <Grid item xs={12} md={6}>
            <TourMap />
          </Grid>
          <Grid item xs={12} md={6}>
            <Container>
              <Timeline></Timeline>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const tours = await getAllTours();
  const paths = tours.map((tour) => ({
    params: { slug: tour.slug },
  }));

  return { paths, fallback: false };
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const tour = await getTourFromSlug(params.slug);
  return {
    props: { tour },
  };
}

export default TourPage;

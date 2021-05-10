import React, { useEffect } from 'react';
// Local
import { Layout } from '@components/layouts';
// Types
import { Tour } from '@type/tour';
// API
import { getAllTours, getTourFromSlug } from '@api/tours';
import { Typography } from '@material-ui/core';
import { TourHero } from '@components/organisms/tour-hero';
import { useLayoutDispatch } from '@state/layout/layout-state';

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

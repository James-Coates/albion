import React, { useEffect } from 'react';
// Internal
import { useLayoutDispatch } from '@state/layout/layout-state';
import { Layout } from '@components/layouts';
import {
  TourHero,
  TourCarousel,
  TourItinerary,
  TourInclusions,
} from '@components/organisms';
// Types
import { Tour } from '@type/tour';
// API
import { getAllTours, getTourFromSlug } from '@api/tours';
import { urlFor } from 'sanity-client.config';
import Head from 'next/head';

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

  console.log(tour);

  return (
    <Layout>
      <Head>
        <title>{tour.title} - Albion Touring</title>
      </Head>
      <TourHero tour={tour} />
      {tour.gallery ? (
        <TourCarousel
          summary={tour.summary}
          images={tour.gallery.images}
          heading={tour.destinations}
        />
      ) : null}
      {tour.itinerary ? (
        <TourItinerary itinerary={tour.itinerary} />
      ) : null}
      {tour.inclusionsData ? (
        <TourInclusions inclusions={tour.inclusionsData} />
      ) : null}
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

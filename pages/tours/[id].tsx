import { Box, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { Button, Heading, Text } from '../../components/atoms';
import { Layout } from '../../components/layout';
import BlockContent from '@sanity/block-content-to-react';
import { Tour } from '../../models/tour.model';
import { useAppContext, useAppDispatch } from '../../state';
import {
  TourHero,
  Inclusions,
  TourSlider,
  MapPlan,
  TourBook,
} from '../../components/organisms';
import { getAllTours, getTour } from '../../api';
import { FC } from 'react';
import { serializers, urlFor } from '../../sanity-client.config';
import Image from 'next/image';
import { TourTimeline } from '@components/organisms/tour-timline';

interface TourPgaeProps {
  tour: Tour;
}

const TourPage: FC<TourPgaeProps> = ({ tour }) => {
  console.log(tour);
  const state = useAppContext();
  const dispatch = useAppDispatch();

  if (!tour) return <div>Loading...</div>;

  function printState() {
    console.log(state);
  }
  return (
    <Layout>
      <TourHero
        backgroundImage={urlFor(tour.mainImage).url()}
        mainCopy={null}
        destinations={tour.destinations}
        price={tour.price}
      >
        <Typography variant="h1" gutterBottom>
          {tour.title}
        </Typography>
        {tour.summary ? (
          <Box mb={6}>
            <BlockContent
              blocks={tour.summary}
              serializers={serializers}
            ></BlockContent>
          </Box>
        ) : null}
        <Button>Book this tour</Button>
      </TourHero>
      <TourTimeline></TourTimeline>
      {/* <LandingHero backgroundImage={tour.image}>
        <Typography variant="h1">{tour.title}</Typography>

        <BlockContent
          blocks={tour.description}
          serializers={serializers}
        ></BlockContent>
      </LandingHero>
      {tour.slides.length ? (
        <TourSlider slides={tour.slides} />
      ) : null}
      {tour.itinerary && tour.mapData ? (
        <MapPlan mapData={tour.mapData} itinerary={tour.itinerary} />
      ) : null}
      {tour.inclusions ? <Inclusions data={tour.inclusions} /> : null}
      <TourBook tour={tour} />
      <Button onClick={printState}>print state</Button> */}
      <Typography>hello</Typography>
    </Layout>
  );
};

export default TourPage;

export const getStaticPaths = async () => {
  const tours = await getAllTours();
  const paths = tours.map((tour) => ({
    params: { id: tour.slug },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  const tour = await getTour(params.id);
  console.log(tour);
  return {
    props: { tour },
  };
}

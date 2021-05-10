import {
  Box,
  Container,
  Dialog,
  Grid,
  Slide,
  Typography,
} from '@material-ui/core';
import { Button } from '../../components/atoms';
import { Layout } from '../../components/layouts/layout';
import BlockContent from '@sanity/block-content-to-react';
import { useAppContext, useAppDispatch } from '../../state';
import {
  TourHero,
  Inclusions,
  TourDetailsSlider,
} from '../../components/organisms';
import { FC, forwardRef, useState } from 'react';
import { serializers, urlFor } from '../../sanity-client.config';
import { TourTimeline } from '@components/organisms/tour-timline';
import Head from 'next/head';
import { TransitionProps } from 'react-transition-group/Transition';
import { Tour } from '@type/tour';
import { getAllTours, getTourFromSlug } from '@api/tours';
import { motion } from 'framer-motion';

interface TourPgaeProps {
  tour: Tour;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TourPage: FC<TourPgaeProps> = ({ tour }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    // setTimeout(() => {

    // }, 500);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(tour);
  const state = useAppContext();
  const dispatch = useAppDispatch();

  if (!tour) return <div>Loading...</div>;

  // useEffect(() => {

  // });

  const handleOnOpen = () => {
    new DROPLET.Widget({
      host: 'test-albion.checkfront.com',
      target: 'CHECKFRONT_WIDGET_01',
      item_id: '2',
      category_id: '2',
      options: 'tabs',
      provider: 'droplet',
    }).render();
  };

  function printState() {
    console.log(state);
  }
  return (
    <Layout>
      <Head>
        <script
          type="text/javascript"
          src="//test-albion.checkfront.com/lib/interface--0.js"
        ></script>
      </Head>
      <TourHero
        id={tour.title}
        backgroundImage={urlFor(tour.mainImage).url()}
        destinations={tour.destinations}
        price={tour.price}
      >
        <motion.div
          layoutId={`title-${tour.title}`}
          transition={{ duration: 1 }}
        >
          <Typography variant="h1" gutterBottom>
            {tour.title}
          </Typography>
        </motion.div>
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
      <TourDetailsSlider />
      <TourTimeline></TourTimeline>

      {tour.inclusionsData ? (
        <Box py={16}>
          <Inclusions data={tour.inclusionsData} />
        </Box>
      ) : null}
      <Button onClick={handleClickOpen}>Book now</Button>
      <Dialog
        fullScreen
        open={open}
        onEnter={handleOnOpen}
        onClose={handleClose}
      >
        <Button onClick={handleClose}>Close</Button>
        <div id="CHECKFRONT_WIDGET_01">
          <p id="CHECKFRONT_LOADER">Searching Availability...</p>
        </div>
      </Dialog>

      <Grid container justify="space-between">
        <Grid item xs={12} md={5}>
          <Typography variant="h3" color="primary" component="h2">
            A little taster of one of our tours...
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mt={6}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Libero dolorem doloribus veniam iure, aliquam
              similique autem tempore aliquid excepturi dolores saepe
              iste! Minus, odit quod atque odio est, totam laudantium
              quibusdam temporibus, eligendi incidunt molestias
              aspernatur iusto earum dicta quasi?
            </Typography>
            <Box mt={3}>
              <Button>Book now</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
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
      <Button onClick={printState}>print state</Button> */}
    </Layout>
  );
};

export default TourPage;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticPaths = async () => {
  const tours = await getAllTours();
  const paths = tours.map((tour) => ({
    params: { slug: tour.slug },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps({ params }: Params) {
  const tour = await getTourFromSlug(params.slug);
  return {
    props: { tour },
  };
}

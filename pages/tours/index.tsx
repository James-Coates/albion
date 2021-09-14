import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';

import { Layout } from '@components/layouts';

import { getAllTours } from '@api/tours';

import { Tour } from '@type/tour';

import { useLayoutDispatch } from '@state/layout/layout-state';
import { Box, Container, Typography } from '@material-ui/core';

import { ToursList } from '@components/organisms';
import {
  BlockContent,
  BlockContentProps,
  Section,
  SectionIntroCopy,
  SectionIntroHeading,
} from '@components/molecules';
import { FadeOnScroll } from '@components/animations';
import Head from 'next/head';
import { getToursPageData } from '@api/tours-page';

interface ToursProps {
  tours: Tour[];
  intro: BlockContentProps;
}

const Tours: React.FC<ToursProps> = ({ tours, intro }) => {
  const dispatch = useLayoutDispatch();

  const setHeaderFloat = (float: boolean): void =>
    dispatch({
      type: 'setHeaderFloat',
      payload: float,
    });

  const handleLandingViewVisibility = (inView: boolean): void => {
    console.log('change');
    setHeaderFloat(!inView);
  };

  const handleLandingScrollClick = (): void => {
    scroller.scrollTo('start', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 1,
    });
  };

  useEffect(() => {
    setHeaderFloat(true);
    return () => {
      setHeaderFloat(false);
    };
  }, []);

  console.log(intro);

  return (
    <Layout>
      <Head>
        <title>Our Tours across Britain - Albion Touring</title>
      </Head>
      <Element name="start">
        <Section>
          <Container maxWidth="xl">
            <FadeOnScroll>
              <SectionIntroHeading>
                <Typography variant="h2" color="primary">
                  Our Tours
                </Typography>
              </SectionIntroHeading>
              {intro ? (
                <SectionIntroCopy>
                  <BlockContent blocks={intro}></BlockContent>
                </SectionIntroCopy>
              ) : null}
            </FadeOnScroll>
            <Box my="12vh">
              <ToursList tours={tours} />
            </Box>
          </Container>
        </Section>
      </Element>
    </Layout>
  );
};

export async function getStaticProps(): Promise<{
  props: ToursProps;
  revalidate: number;
}> {
  const tours = await getAllTours();

  const { intro } = await getToursPageData();

  return {
    props: { tours, intro },
    revalidate: 10,
  };
}

export default Tours;

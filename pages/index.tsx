import { FC } from 'react';
import {
  TourList,
  LandingHero,
  TourSlider,
} from '../components/organisms';
import { Layout } from '../components/layout';

import { getAllTours, getLandingData } from '../api';
import { Box, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { typography, TypographyProps } from 'styled-system';
import { InView } from 'react-intersection-observer';
import { useLayoutDispatch } from '../state/layout/layout-state';
import { Element, scroller } from 'react-scroll';
import BlockContent, {
  BlockContentProps,
} from '@sanity/block-content-to-react';
import { serializers, urlFor } from '../sanity-client.config';
import { FeaturedTours } from '@components/organisms/featured-tours';

import { Tour } from '../types/tour';
import { AboutSection } from '@components/organisms/about-section';

interface LandingProps {
  mainHeading: string;
  mainCopy?: BlockContentProps;
  tours: Tour[];
  featureList: any[];
}

const PageTitle = styled(Typography)<TypographyProps>`
  ${typography}
`;

const Home: FC<LandingProps> = ({
  tours,
  mainHeading,
  mainCopy,
  featureList,
}) => {
  console.log(featureList);
  const dispatch = useLayoutDispatch();

  const setHeaderFloat = (float: boolean) =>
    dispatch({
      type: 'setHeaderFloat',
      payload: float,
    });

  function handleLandingViewVisibility(inView: boolean) {
    setHeaderFloat(!inView);
  }

  function handleLandingScrollClick() {
    scroller.scrollTo('start', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 1,
    });
  }

  return (
    <Layout headerFloatVariant="filled">
      <InView as="div" onChange={handleLandingViewVisibility}>
        <LandingHero
          mainHeading={mainHeading}
          mainCopy={mainCopy}
          backgroundImage="/images/poster.png"
          handleScrollButtonClick={handleLandingScrollClick}
        />
        <Element name="start">
          <FeaturedTours tours={tours} />
        </Element>
      </InView>
      <AboutSection features={featureList} />
    </Layout>
  );
};

export async function getStaticProps(): Promise<{
  props: LandingProps;
  revalidate: number;
}> {
  const {
    mainHeading = 'Main Heading',
    mainCopy = null,
    featureList = [],
  } = (await getLandingData()) || {};
  const tours = await getAllTours();

  const res = await fetch(
    'https://test-albion.checkfront.com/api/3.0/item?packages=true',
  );

  const json = await res.json();

  return {
    props: { tours, mainHeading, mainCopy, featureList },
    revalidate: 1,
  };
}

export default Home;

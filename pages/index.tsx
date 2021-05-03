import React from 'react';
import { InView } from 'react-intersection-observer';
import { Element, scroller } from 'react-scroll';
import { Layout } from '@components/layouts';
import { LandingHero } from '@components/organisms';
import { FeaturedTours } from '@components/organisms/featured-tours';
// Api
import { getLandingData } from '@api/landing';
import { getAllTours } from '@api/tours';
// Types
import { Tour } from '@type/tour';
import { BlockContentProps } from '@sanity/block-content-to-react';
// to sort
import { useLayoutDispatch } from '@state/layout/layout-state';
import { AboutSection } from '@components/organisms/about-section';
import video from '../public/video/albion.mp4';

interface LandingProps {
  mainHeading: string;
  mainCopy?: BlockContentProps;
  tours: Tour[];
  featureList: any[];
}

const Home: React.FC<LandingProps> = ({
  tours,
  mainHeading,
  mainCopy,
  featureList,
}) => {
  const dispatch = useLayoutDispatch();

  const setHeaderFloat = (float: boolean): void =>
    dispatch({
      type: 'setHeaderFloat',
      payload: float,
    });

  const handleLandingViewVisibility = (inView: boolean): void => {
    setHeaderFloat(!inView);
  };

  const handleLandingScrollClick = (): void => {
    scroller.scrollTo('start', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 1,
    });
  };

  return (
    <Layout headerFloatVariant="filled">
      <InView as="div" onChange={handleLandingViewVisibility}>
        <LandingHero
          mainHeading={mainHeading}
          mainCopy={mainCopy}
          backgroundImage="/images/poster.png"
          video={true}
          handleScrollButtonClick={handleLandingScrollClick}
          transition={true}
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
}> {
  const {
    mainHeading = 'Main Heading',
    mainCopy = null,
    featureList = [],
  } = (await getLandingData()) || {};
  const tours = await getAllTours();

  return {
    props: { tours, mainHeading, mainCopy, featureList },
  };
}

export default Home;

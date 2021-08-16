import React, { useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import { Element, scroller } from 'react-scroll';
import Link from 'next/link';

import { Layout } from '@components/layouts';

import { getLandingData } from '@api/landing';
import { getAllTours } from '@api/tours';

import { Tour } from '@type/tour';
import { BlockContentProps } from '@sanity/block-content-to-react';

import { useLayoutDispatch } from '@state/layout/layout-state';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { LandingHero } from '@components/organisms/landing-hero';
import { TextButton } from '@components/atoms/text-button';
import { Testimonials, ToursList } from '@components/organisms';
import {
  BlockContent,
  Section,
  SectionIntroCopy,
  SectionIntroHeading,
  SplitContent,
  SplitContentCopy,
  SplitContentImage,
} from '@components/molecules';
import { FadeOnScroll } from '@components/animations';
import { Feature } from '@type/feature';
import { urlFor } from 'sanity-client.config';
import Image from 'next/image';
import { isOdd } from '@lib/math';
import { Testimonial } from '@type/testimonial';
import Head from 'next/head';

interface LandingProps {
  mainHeading: string;
  mainCopy?: BlockContentProps;
  tours: Tour[];
  featureList: Feature[];
  testimonials: Testimonial[];
}

const Home: React.FC<LandingProps> = ({
  tours,
  mainHeading,
  mainCopy,
  featureList,
  testimonials,
}) => {
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
    setHeaderFloat(false);
  }, []);

  console.log(testimonials);

  return (
    <div>
      <Head>
        <title>Guided British Tours - Albion Touring</title>
      </Head>
      <Layout>
        <InView as="div" onChange={handleLandingViewVisibility}>
          <LandingHero
            mainHeading={mainHeading}
            mainCopy={mainCopy}
            handleScrollButtonClick={handleLandingScrollClick}
          />
        </InView>
        <Element name="start">
          <Section>
            <Container maxWidth="xl">
              <FadeOnScroll>
                <SectionIntroHeading>
                  <Typography variant="h2" color="primary">
                    Explore our Featured Tours
                  </Typography>
                </SectionIntroHeading>
                <SectionIntroCopy>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Laborum, soluta veritatis totam officiis qui
                    recusandae aliquam nobis. Doloribus placeat veniam
                    laudantium, laborum consequatur quis dolorum,
                    nulla magni in ducimus ipsa accusamus perspiciatis
                    nostrum quam iure tenetur nobis tempora,
                    blanditiis rerum?
                  </Typography>

                  <Box mt={4}>
                    <Link href="/tours">
                      <a>
                        <TextButton>View all tours</TextButton>
                      </a>
                    </Link>
                  </Box>
                </SectionIntroCopy>
              </FadeOnScroll>
              <Box my={7}>
                <ToursList tours={tours} />
              </Box>
            </Container>
          </Section>
        </Element>

        <Section>
          <Container maxWidth="xl">
            <FadeOnScroll>
              <SectionIntroHeading>
                <Typography variant="h2" color="primary">
                  What make our tours special?
                </Typography>
              </SectionIntroHeading>
              <SectionIntroCopy>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Laborum, soluta veritatis totam officiis qui
                  recusandae aliquam nobis. Doloribus placeat veniam
                  laudantium, laborum consequatur quis dolorum, nulla
                  magni in ducimus ipsa accusamus perspiciatis nostrum
                  quam iure tenetur nobis tempora, blanditiis rerum?
                </Typography>
              </SectionIntroCopy>
            </FadeOnScroll>
          </Container>
          {featureList
            ? featureList.map((feature, i) => (
                <Box my="12vh" key={i}>
                  <FadeOnScroll>
                    <SplitContent reverse={isOdd(i)}>
                      <SplitContentImage>
                        <Image
                          src={urlFor(feature.image).url() || ''}
                          layout="fill"
                          objectFit="cover"
                        />
                      </SplitContentImage>
                      <SplitContentCopy>
                        <Typography
                          variant="overline"
                          gutterBottom
                          color="textSecondary"
                        >
                          {feature.context}
                        </Typography>
                        <Typography
                          variant="h3"
                          gutterBottom
                          color="primary"
                        >
                          {feature.heading}
                        </Typography>
                        <BlockContent blocks={feature.summary} />
                      </SplitContentCopy>
                    </SplitContent>
                  </FadeOnScroll>
                </Box>
              ))
            : null}
        </Section>
        {testimonials ? (
          <Testimonials testimonials={testimonials} />
        ) : null}
      </Layout>
    </div>
  );
};

export async function getStaticProps(): Promise<{
  props: LandingProps;
}> {
  const {
    mainHeading = 'Main Heading',
    mainCopy = null,
    featuredTours = [],
    featureList = [],
    testimonials = [],
  } = (await getLandingData()) || {};
  console.log(featuredTours);

  return {
    props: {
      tours: featuredTours,
      mainHeading,
      mainCopy,
      featureList,
      testimonials,
    },
  };
}

export default Home;

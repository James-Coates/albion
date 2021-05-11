import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';

import { Layout } from '@components/layouts';

import { getAllTours } from '@api/tours';

import { Tour } from '@type/tour';

import { useLayoutDispatch } from '@state/layout/layout-state';
import { Box, Container, Typography } from '@material-ui/core';

import { ToursList } from '@components/organisms';
import {
  Section,
  SectionIntroCopy,
  SectionIntroHeading,
} from '@components/molecules';
import { FadeOnScroll } from '@components/animations';

interface ToursProps {
  tours: Tour[];
}

const Tours: React.FC<ToursProps> = ({ tours }) => {
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

  return (
    <Layout>
      <Element name="start">
        <Section>
          <Container maxWidth="xl">
            <FadeOnScroll>
              <SectionIntroHeading>
                <Typography variant="h2" color="primary">
                  Our Tours
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
}> {
  const tours = await getAllTours();

  return {
    props: { tours },
  };
}

export default Tours;

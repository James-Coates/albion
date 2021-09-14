import React, { useEffect, useState } from 'react';
import { Layout } from '@components/layouts';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { useLayoutDispatch } from '@state/layout/layout-state';
import {
  ContactForm,
  Section,
  SectionIntroCopy,
  SectionIntroHeading,
} from '@components/molecules';
import Head from 'next/head';

const Contact: React.FC = () => {
  const dispatch = useLayoutDispatch();
  const [isMounted, setIsMounted] = useState(false);

  const setHeaderFloat = (float: boolean): void =>
    dispatch({
      type: 'setHeaderFloat',
      payload: float,
    });

  useEffect(() => {
    setHeaderFloat(true);

    return () => {
      setHeaderFloat(false);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Contact us - Albion Touring</title>
      </Head>
      <Section $first color="text.primary">
        <Container maxWidth="xl">
          <SectionIntroHeading>
            <Typography variant="h1">Get in touch</Typography>
          </SectionIntroHeading>
          <SectionIntroCopy>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eius repellendus cum non eaque a quod in exercitationem
              deleniti voluptates officiis.
            </Typography>
          </SectionIntroCopy>
        </Container>
        <Container maxWidth="md">
          <Box my="5vw">
            <ContactForm />
          </Box>
        </Container>
      </Section>
    </Layout>
  );
};

export default Contact;

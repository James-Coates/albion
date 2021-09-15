import React, { useEffect, useState } from 'react';
import { Layout } from '@components/layouts';
import {
  Alert,
  Box,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import { useLayoutDispatch } from '@state/layout/layout-state';
import {
  ContactForm,
  Section,
  SectionIntroCopy,
  SectionIntroHeading,
} from '@components/molecules';
import Head from 'next/head';
import { Snackbar } from 'material-ui';

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
              If you have any queries please dont hesitate to contact
              us using the form below. Drop us a message and we will
              get back to you as soon as possible.
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

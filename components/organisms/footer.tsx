import React from 'react';
import styled from 'styled-components';

import { Box, Container, Grid, Typography } from '@material-ui/core';

import { fill } from '@lib/styled-components/utils';
import Link from 'next/link';
import { SocialLink } from '@components/molecules';

const links = [
  {
    name: 'instagram',
    link: 'http://google.com',
  },
  {
    name: 'twitter',
    link: 'http://google.com',
  },
  {
    name: 'tripadvisor',
    link: 'http://google.com',
  },
];

const FooterWrapper = styled(Box)`
  position: relative;
  min-height: 20vh;
  padding: ${({ theme }) =>
    `${theme.spacing(10)} 0 ${theme.spacing(3)}`};
  color: white;
`;

const FooterBackground = styled.div`
  ${fill()};
  background-color: ${({ theme }) => theme.palette.primary.dark};
  z-index: -1;
`;

export const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterBackground />
    <Container maxWidth="lg">
      <Box mb={5}>
        <Grid container>
          <Grid item xs={12} md={6}>
            {/* <Logo /> */}
          </Grid>
          <Grid container item xs={12} md={6}>
            <Grid item xs={5}>
              <Typography component="h3" variant="h4" gutterBottom>
                Links
              </Typography>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Link href="/">
                    <a>
                      <Typography variant="body2">Tours</Typography>
                    </a>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/contact">
                    <a>
                      <Typography variant="body2">Contact</Typography>
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Typography component="h3" variant="h4" gutterBottom>
                Follow us
              </Typography>
              <Grid container spacing={3}>
                {links.map((item, i) => (
                  <Grid item key={i}>
                    <SocialLink name={item.name} link={item.link} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box color="grey.600">
        <Grid container justify="space-between">
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                {/* <Typography variant="body2" component="span">
                  hello
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" component="span">
                  hello
                </Typography> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2">Created by CTS</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </FooterWrapper>
);

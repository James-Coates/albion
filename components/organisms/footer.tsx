import React from 'react';
import styled from 'styled-components';

import { Box, Container, Grid, Typography } from '@material-ui/core';

import { fill } from '@lib/styled-components/utils';
import Link from 'next/link';
import { SocialLink } from '@components/molecules';
import links from '../../public/config/social-handles.json';
import { SvgIcon } from '@components/atoms';
import LogoSvg from '../../public/images/albion-touring.svg';
import { HoverColorLink } from '@components/animations';

const FooterWrapper = styled(Box)`
  position: relative;
  min-height: 20vh;
  padding: ${({ theme }) =>
    `${theme.spacing(8)} 0 ${theme.spacing(3)}`};
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
    <Container maxWidth="xl">
      <Box mb={10}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <SvgIcon height={32} Icon={LogoSvg} />
            <Typography variant="body2">
              Coach and Black cab tours London UK Crown House <br />
              27 Old Gloucester Street
              <br /> London WC1N 3AX
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={8}
            justifyContent="flex-end"
          >
            <Grid item xs={4}>
              <Typography component="h3" variant="h4" gutterBottom>
                Contact Info
              </Typography>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <HoverColorLink
                    href="tel:+44 208 914 8251"
                    target="blank"
                  >
                    <Typography variant="body2" component="span">
                      +44 208 914 8251
                    </Typography>
                  </HoverColorLink>
                </Grid>
                <Grid item>
                  <HoverColorLink
                    href="mailto:help@albiontouring.com"
                    target="blank"
                  >
                    <Typography variant="body2" component="span">
                      help@albiontouring.com
                    </Typography>
                  </HoverColorLink>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Typography component="h3" variant="h4" gutterBottom>
                Links
              </Typography>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Link href="/">
                    <a>
                      <Typography variant="body2" component="span">
                        Tours
                      </Typography>
                    </a>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/contact">
                    <a>
                      <Typography variant="body2" component="span">
                        Contact
                      </Typography>
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
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
        <Grid container justifyContent="space-between">
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <Typography variant="body2">
                  © Albion touring 2021
                  <Box
                    display="inline-block"
                    mx={1}
                    component="span"
                  ></Box>
                  |
                  <Box
                    display="inline-block"
                    mx={1}
                    component="span"
                  ></Box>
                  <Link href="/terms">
                    <a>Terms</a>
                  </Link>
                </Typography>
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

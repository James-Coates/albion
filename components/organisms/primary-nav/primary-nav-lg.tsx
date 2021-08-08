import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { Box, Button, Grid, Typography } from '@material-ui/core';

import { NavItem, SocialLink } from '@components/molecules';

import { NavProps } from '.';

import links from '../../../public/config/social-handles.json';

const Break = styled.span`
  height: 24px;
  width: 1px;
  background-color: white;
  opacity: 0.1;
  margin: ${({ theme }) => `0 ${theme.spacing(6)}`};
`;

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
`;

export const PrimaryNavLg: React.FC<NavProps> = ({ menuLinks }) => {
  return (
    <Wrapper>
      <Box>
        <Grid container spacing={8}>
          {menuLinks.map((link, i) => (
            <Grid item key={i}>
              <NavItem route={link.route}>
                <Typography variant="button" component="span">
                  {link.label}
                </Typography>
              </NavItem>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Break />
      <Box>
        <Grid container spacing={3}>
          {links.map((item, i) => (
            <Grid item key={i}>
              <SocialLink name={item.name} link={item.link} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <Box>
        <Button>Book a tour</Button>
      </Box> */}
    </Wrapper>
  );
};

import React from 'react';
import styled, { css } from 'styled-components';
import { SocialLinks } from '@components/organisms';
import { Box, Grid, Typography } from '@material-ui/core';
import { Button } from '@components/atoms';
import { motion } from 'framer-motion';
import { NavProps } from '.';
import { NavItem } from '@components/molecules/nav-item';

const Break = styled.span`
  height: 24px;
  width: 1px;
  background-color: white;
  opacity: 0.1;
  margin: ${({ theme }) => `0 ${theme.spacing(4)}`};
`;

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
`;

export const PrimaryNavLg: React.FC<NavProps> = ({ menuLinks }) => {
  return (
    <Wrapper>
      <Box>
        <Grid container spacing={4}>
          {menuLinks.map((link, i) => (
            <Grid item key={i}>
              <NavItem route={link.route}>
                <Typography variant="body2">{link.label}</Typography>
              </NavItem>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Break />
      <Box mr={4}>
        <SocialLinks />
      </Box>
      <Box>
        <Button>Book a tour</Button>
      </Box>
    </Wrapper>
  );
};

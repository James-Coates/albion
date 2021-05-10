import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { SocialLinks } from '@components/organisms';
import { Burger, NavItem } from '@components/molecules';
import { Button } from '@components/atoms';
import { Box, Grid, Typography } from '@material-ui/core';
import { NavProps } from '.';

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  flex-direction: column;
  padding: 80px;
`;

const HeaderBurger = styled(Burger)`
  z-index: 2;
  position: fixed;
  top: 16px;
  right: 16px;
`;

export const PrimaryNavSm: React.FC<NavProps> = ({ menuLinks }) => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const variants: Variants = {
    open: {
      y: 0,
      transition: {
        duration: 0.3,
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
    closed: {
      y: '-100%',
      transition: { duration: 0.3, delay: 0.5, damping: 0 },
    },
  };

  const menuItemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '2rem' },
  };

  const footerVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, damping: 0 },
    },
    closed: { y: '2rem', opacity: 0, transition: { damping: 0 } },
  };

  function onBurgerClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <Wrapper
        initial="closed"
        animate={menuOpen ? 'open' : 'closed'}
        variants={variants}
      >
        <Box flex={1} py={10}>
          <Grid container direction="column" spacing={5}>
            {menuLinks.map((link, i) => (
              <Grid item key={i}>
                <motion.div
                  variants={menuItemVariants}
                  transition={{ damping: 0 }}
                >
                  <NavItem route={link.route}>
                    <Typography variant="h3" component="span">
                      {link.label}
                    </Typography>
                  </NavItem>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
        <motion.div variants={footerVariants}>
          <Box my={4}>
            <SocialLinks />
          </Box>
          <Button>Book a tour</Button>
        </motion.div>
      </Wrapper>
      <HeaderBurger isActive={menuOpen} onClick={onBurgerClick} />
    </>
  );
};

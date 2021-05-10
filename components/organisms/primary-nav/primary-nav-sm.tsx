import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
// Internal
import {
  Burger,
  NavItem,
  Portal,
  SocialLink,
} from '@components/molecules';
import { NavProps } from '.';
// Extenral
import { Box, Button, Grid, Typography } from '@material-ui/core';

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.dark};
  flex-direction: column;
  padding: 32px 64px;
`;

const HeaderBurger = styled(Burger)`
  z-index: 2;
  position: fixed;
  top: 16px;
  right: 16px;
`;

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

export const PrimaryNavSm: React.FC<NavProps> = ({
  menuLinks,
  socialLinks,
}) => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  function onBurgerClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <Portal selector="mobile-menu-root">
      <Wrapper
        initial="closed"
        animate={menuOpen ? 'open' : 'closed'}
        variants={variants}
      >
        <Box flex={1} pt={10}>
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
            <Grid container spacing={2}>
              {socialLinks.map((item, i) => (
                <Grid item key={i}>
                  <SocialLink name={item.name} link={item.link} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Wrapper>
      <HeaderBurger isActive={menuOpen} onClick={onBurgerClick} />
    </Portal>
  );
};

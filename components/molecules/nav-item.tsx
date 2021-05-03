import { Grid, Typography, useTheme } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface NavItemProps {
  route: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  children,
  route,
}) => {
  const theme = useTheme();

  const whileHover = {
    color: theme.palette.secondary.main,
  };

  return (
    <Link href={route} passHref>
      <motion.a whileHover={whileHover}>{children}</motion.a>
    </Link>
  );
};

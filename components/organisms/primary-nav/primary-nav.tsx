import React from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { PrimaryNavLg } from './primary-nav-lg';
import { PrimaryNavSm } from './primary-nav-sm';

export const PrimaryNav: React.FC = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('md'));

  const menuLinks = [
    {
      label: 'About',
      route: '/',
    },
    {
      label: 'Contact',
      route: '/',
    },
  ];

  return (
    <>
      {isLg ? (
        <PrimaryNavLg menuLinks={menuLinks} />
      ) : (
        <PrimaryNavSm menuLinks={menuLinks} />
      )}
    </>
  );
};

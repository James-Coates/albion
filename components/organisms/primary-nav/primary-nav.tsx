import React from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
// Internal
import { PrimaryNavLg } from './primary-nav-lg';
import { PrimaryNavSm } from './primary-nav-sm';
// Public
import navLinks from '../../../public/config/primary-nav.json';
import socialLinks from '../../../public/config/social-handles.json';

export const PrimaryNav: React.FC = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {isLg ? (
        <PrimaryNavLg
          menuLinks={navLinks}
          socialLinks={socialLinks}
        />
      ) : (
        <PrimaryNavSm
          menuLinks={navLinks}
          socialLinks={socialLinks}
        />
      )}
    </>
  );
};

import React from 'react';
import { Header, Footer } from '@components/organisms';
import { useLayoutContext } from '@state/layout/layout-state';

export const Layout: React.FC = ({ children }) => {
  const { headerFloat } = useLayoutContext();

  return (
    <>
      <Header float={headerFloat} />
      {children}
      <Footer />
    </>
  );
};

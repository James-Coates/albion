import React from 'react';
import { Footer, Header, HeaderVariant } from '@components/organisms';
import { useLayoutContext } from '@state/layout/layout-state';

interface LayoutProps {
  headerVariant?: HeaderVariant;
  headerFloatVariant?: HeaderVariant;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  headerVariant,
  headerFloatVariant,
}) => {
  const { headerFloat } = useLayoutContext();

  return (
    <>
      <Header
        variant={headerVariant}
        floatVariant={headerFloatVariant}
        float={headerFloat}
      />
      {children}
      <Footer />
    </>
  );
};

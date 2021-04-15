import { FC } from 'react';
import { useLayoutContext } from '../state/layout/layout-state';
import { Header, Footer } from './organisms';

interface LayoutProps {
  headerVariant?: string;
  headerFloatVariant?: string;
}

export const Layout: FC<LayoutProps> = ({
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

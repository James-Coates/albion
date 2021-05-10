import React from 'react';
import Link from 'next/link';

import { HoverColorLink } from '@components/animations/hover-color-link';

interface NavItemProps {
  route: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  children,
  route,
}) => {
  return (
    <Link href={route} passHref>
      <HoverColorLink>{children}</HoverColorLink>
    </Link>
  );
};

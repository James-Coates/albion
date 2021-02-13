import styled from 'styled-components';
import { Box, Flex } from '../base';
import { Icon } from '../base/icon';
import { Logo } from '../logo';
import { Menu } from './menu';
import LogoSvg from '../../public/images/albion-touring.svg';
import Link from 'next/link';

const HeaderWrapper = styled(Box)`
  position: absolute;
  width: 100%;
  padding: 16px 40px;
  z-index: 2;
`;

export const Header = () => (
  <HeaderWrapper>
    <Flex justifyContent="space-between" alignItems="flex-end">
      {/* <Logo height={32} width={'auto'} length="auto" /> */}
      <Link href="/">
        <a>
          <Icon height={32} color="white">
            <LogoSvg></LogoSvg>
          </Icon>
        </a>
      </Link>
      <Menu />
    </Flex>
  </HeaderWrapper>
);

import styled from 'styled-components';
import { Box } from '../base';
import { Flex } from '../base/flex';
import { Text } from '../base/text';
import Link from 'next/link';

const MenuWrapper = styled(Box)`
  color: white;
`;

const MenuLink = styled.a`
  display: block;
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const Menu = () => (
  <MenuWrapper>
    <Flex>
      <Link href="/" passHref>
        <MenuLink>
          <Text type="span">Item 1</Text>
        </MenuLink>
      </Link>
      <Link href="/" passHref>
        <MenuLink>
          <Text type="span">Item 2</Text>
        </MenuLink>
      </Link>
    </Flex>
  </MenuWrapper>
);

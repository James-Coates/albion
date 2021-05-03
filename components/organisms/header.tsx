import React from 'react';
import styled, { css } from 'styled-components';
import { PrimaryNav } from '@components/organisms';
import { HeaderWrapper, Logo } from '@components/molecules';
import { Link } from '@components/atoms';

export type HeaderVariant = 'default' | 'filled';

export interface HeaderProps {
  variant?: HeaderVariant;
  floatVariant?: HeaderVariant;
  float?: boolean;
}

const HeaderContainer = styled.div`
  display: flex;
  padding: ${({ theme }) => `0 ${theme.spacing(2)}`};
  justify-content: space-between;
  align-items: center;
  flex: 1;
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      padding: ${({ theme }) => `0 ${theme.spacing(8)}`};
    }
  `}
`;

const HeaderLeft = styled.div`
  flex: 0 0 auto;
`;

const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderWrapper {...props}>
      <HeaderContainer>
        <HeaderLeft>
          <Link href="/">
            <Logo />
          </Link>
        </HeaderLeft>
        <HeaderRight>
          <PrimaryNav />
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

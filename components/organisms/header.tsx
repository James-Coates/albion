import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { motion, MotionProps, Variants } from 'framer-motion';
// Internal
import { SvgIcon } from '@components/atoms';
import { PrimaryNav } from './primary-nav';
// Public
import LogoSvg from '../../public/images/albion-touring.svg';

interface HeaderProps {
  float?: boolean;
}

export interface HeaderWrapperProps extends MotionProps {
  filled?: boolean;
  float?: boolean;
}

const HeaderWrapper = styled(motion.div)<HeaderWrapperProps>`
  display: flex;
  align-items: center;
  z-index: 2;
  height: 60px;
  top: 0;
  left: 0;
  width: 100%;
  ${({ theme, filled, float }) => css`
    color: ${({ theme }) => theme.palette.common.white};
    ${filled
      ? css`
          background-color: ${theme.palette.primary.dark};
        `
      : css`
          background-color: transparent;
        `}
    ${theme.breakpoints.up('md')} {
      height: 72px;
      top: ${float ? 0 : '24px'};
    }
  `}
`;

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

const variants: Variants = {
  static: {
    y: 0,
    opacity: 1,
    position: 'absolute',
  },
  fixed: {
    position: 'fixed',
    y: [-100, 0],
    opacity: [0, 1],
  },
};

export const Header: React.FC<HeaderProps> = ({ float }) => {
  const variant = float ? 'fixed' : 'static';
  const filled = float;
  return (
    <HeaderWrapper
      animate={variant}
      variants={variants}
      layout="position"
      filled={filled}
      float={float}
      initial="static"
    >
      <HeaderContainer>
        <HeaderLeft>
          <Link href="/">
            <a>
              <SvgIcon height={32} Icon={LogoSvg} />
            </a>
          </Link>
        </HeaderLeft>
        <HeaderRight>
          <PrimaryNav />
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

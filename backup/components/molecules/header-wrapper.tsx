import { Slide } from '@material-ui/core';
import { Theme } from '@theme/theme';
import { rgba } from 'polished';
import React from 'react';
import styled, {
  css,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { HeaderProps } from '@components/organisms';
import { motion } from 'framer-motion';

export const Base = styled.div<HeaderProps>`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
  height: 60px;
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      height: 64px;
    }
  `}
  ${({ variant, theme }) => handleVariant(variant, theme)}
`;

export const StaticWrapper = styled(Base)`
  position: absolute;
  color: ${({ theme }) => theme.palette.common.white};
  top: 8px;
`;

const FixedWrapper = styled(Base)`
  position: fixed;
  box-shadow: ${({ theme }) => theme.shadows[4]};
  color: ${({ theme }) => theme.palette.common.white};
`;

export const HeaderWrapper: React.FC<HeaderProps> = ({
  children,
  variant,
  floatVariant,
  float,
}) => {
  return (
    <>
      <Slide in={float}>
        <FixedWrapper variant={floatVariant}>{children}</FixedWrapper>
      </Slide>
      <motion.div
        initial={{ opacity: 0, y: '-2rem' }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1, duration: 1 },
        }}
      >
        <StaticWrapper variant={variant}>{children}</StaticWrapper>
      </motion.div>
    </>
  );
};

function handleVariant(
  variant: string | null | undefined,
  theme: Theme,
) {
  switch (variant) {
    case 'filled':
      return headerVariantFilledCss(theme);
    default:
      return headerVariantDefaultCss(theme);
  }
}

function headerVariantDefaultCss(
  theme: Theme,
): FlattenSimpleInterpolation {
  return css`
    /* background-color: ${rgba(theme.palette.primary.dark, 0.4)};
    backdrop-filter: blur(4px); */
  `;
}

function headerVariantFilledCss(
  theme: Theme,
): FlattenSimpleInterpolation {
  return css`
    background-color: ${theme.palette.primary.dark};
  `;
}

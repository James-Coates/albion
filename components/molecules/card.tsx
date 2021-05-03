import styled, { css } from 'styled-components';
import { FC, ReactNode } from 'react';
import { Box, BoxProps } from '@material-ui/core';
import Image, { ImageProps } from 'next/image';
import { Theme } from '@theme/theme';

type CardVariant = 'light' | 'dark';

export interface CardProps extends BoxProps {
  backgroundUrl?: string;
  children?: ReactNode;
  variant?: CardVariant;
}

const CardWrapper = styled(Box)<CardProps>`
  position: relative;
  z-index: 0;
  padding: 24px;
  /* box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
  color: white;
  cursor: pointer;
  overflow: hidden;
  ${({ variant, theme }) => handleVariant(variant, theme)}
`;

const CardBackground = styled(Image)<ImageProps>`
  z-index: -1;
  transition: 600ms;
  ${CardWrapper}:hover & {
    transform: scale(1.05);
  }
`;

export const CardBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  z-index: -1;
  opacity: 0.2;
  transition: 600ms;

  ${CardWrapper}:hover & {
    opacity: 0.1;
  }
`;

export const Card: FC<CardProps> = ({
  children,
  backgroundUrl,
  ...props
}) => <CardWrapper {...props}>{children}</CardWrapper>;

function handleVariant(
  variant: CardVariant | undefined,
  theme: Theme,
) {
  switch (variant) {
    case 'dark':
      return darkVariant(theme);
    default:
      return lightVariant(theme);
  }
}

function lightVariant(theme: Theme) {
  return css`
    background-color: ${theme.palette.common.white};
    color: ${theme.palette.common.black};
  `;
}

function darkVariant(theme: Theme) {
  return css`
    background-color: ${theme.palette.primary.dark};
    color: ${theme.palette.common.white};
  `;
}

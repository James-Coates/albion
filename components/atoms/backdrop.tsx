import React from 'react';
import styled, { css } from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';

interface BackdropProps extends BoxProps {
  hoverEffect?: boolean;
  opacity: number;
}

export const Inner = styled(Box)<BackdropProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  z-index: -1;
  opacity: 0.4;
  transition: 600ms;

  ${({ hoverEffect, opacity }) =>
    hoverEffect
      ? css`
          opacity: ${opacity};
          &:hover {
            opacity: 0.1;
          }
        `
      : css`
          opacity: ${opacity};
        `}
`;

export const Backdrop: React.FC<BackdropProps> = ({
  opacity,
  ...props
}) => {
  return <Inner opacity={opacity} {...props} />;
};

import React from 'react';
import styled, { css } from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';

interface BackdropProps extends BoxProps {
  hoverEffect?: boolean;
}

export const Inner = styled(Box)<BackdropProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  z-index: -1;
  opacity: 0.2;
  transition: 600ms;

  ${({ hoverEffect }) =>
    hoverEffect
      ? css`
          &:hover {
            opacity: 0.1;
          }
        `
      : null}
`;

export const Backdrop: React.FC<BackdropProps> = (props) => {
  return <Inner {...props} />;
};

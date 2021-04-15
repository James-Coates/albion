import { Box, BoxProps } from '@material-ui/core';
import styled, { css } from 'styled-components';

interface HeaderWrapperProps extends BoxProps {
  variant: string | null | undefined;
}

export const HeaderWrapper = styled(Box)<HeaderWrapperProps>`
  position: absolute;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    color: ${theme.palette.common.white};
  `}
  ${({ theme, variant }) => css`
    background-color: ${variant === 'block'
      ? theme.palette.primary.main
      : 'transparent'};
  `}
    ${({ theme, variant }) => css`
    height: ${variant === 'block' ? theme.spacing(7) : 'auto'};
  `}
    ${({ theme, variant }) => css`
    padding: ${variant === 'block'
      ? 0
      : `${theme.spacing(5)} ${theme.spacing(3)}`};
  `};
`;

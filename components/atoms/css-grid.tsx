import styled, { css } from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';

interface CssGridProps extends BoxProps {
  container: boolean;
}

export const CssGrid = styled(Box)<CssGridProps>`
  ${({ theme, container }) => css`
    ${container
      ? css`
          display: grid;
          grid-template-columns: 1fr repeat(12, 1fr) 1fr;
          grid-gap: ${theme.spacing(3)};
        `
      : null}
  `}
`;

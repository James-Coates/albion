import styled, { css } from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';

interface SectionProps extends BoxProps {
  $first?: boolean;
}

export const Section = styled(Box)<SectionProps>`
  margin-top: 15vh;
  margin-bottom: 15vh;

  ${({ $first, theme }) =>
    $first
      ? css`
          margin-top: calc(15vh + 6rem);

          ${theme.breakpoints.up('lg')} {
            margin-top: calc(15vh + 7.2rem);
          }
        `
      : null}
`;

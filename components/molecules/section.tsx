import styled, { css } from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';

interface SectionProps extends BoxProps {
  $first?: boolean;
}

export const Section = styled(Box)<SectionProps>`
  padding-top: 15vh;
  padding-bottom: 15vh;

  ${({ $first, theme }) =>
    $first
      ? css`
          padding-top: calc(15vh + 6rem);

          ${theme.breakpoints.up('lg')} {
            padding-top: calc(15vh + 7.2rem);
          }
        `
      : null}
`;

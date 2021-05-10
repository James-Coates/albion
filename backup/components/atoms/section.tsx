import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';

export const Section = styled(Box)`
  ${({ theme }) => css`
    margin: 5vw 0;

    ${theme.breakpoints.up('sm')} {
      margin: 20vh 0;
    }
  `}
`;

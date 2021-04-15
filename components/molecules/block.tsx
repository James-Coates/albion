import { Box } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const Block = styled(Box)`
  ${({ theme }) => css`
    padding-top: ${theme.spacing(6)};
    padding-bottom: ${theme.spacing(6)};
    ${theme.breakpoints.up('md')} {
      padding-top: ${theme.spacing(7)};
      padding-bottom: ${theme.spacing(7)};
    }
  `}
`;

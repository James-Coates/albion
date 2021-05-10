import styled, { css } from 'styled-components';

export const SectionIntroCopy = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(3)};
    margin-bottom: ${theme.spacing(3)};
    ${theme.breakpoints.up('md')} {
      max-width: 35vw;
      margin-left: 40vw;
    }
  `}
`;

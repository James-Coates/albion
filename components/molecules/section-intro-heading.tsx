import styled, { css } from 'styled-components';

export const SectionIntroHeading = styled.div`
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      max-width: 40vw;
      margin-left: 12vw;
      margin-bottom: ${theme.spacing(5)};
    }
  `}
`;

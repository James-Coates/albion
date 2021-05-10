import styled, { css } from 'styled-components';

interface SplitContentProps {
  reverse?: boolean;
}

export const SplitContent = styled.div<SplitContentProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${({ reverse, theme }) =>
    reverse
      ? css`
          ${theme.breakpoints.up('md')} {
            flex-direction: row-reverse;
          }
        `
      : null}
`;

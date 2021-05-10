import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  flex: 1 0 100%;
  position: relative;

  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      flex: 0 0 45%;
      max-width: 45%;
    }
  `}
`;

const ImageContainer = styled.div`
  padding-top: 60%;
`;

export const SplitContentImage: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <ImageContainer>{children}</ImageContainer>
    </Wrapper>
  );
};

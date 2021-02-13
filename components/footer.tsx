import React from 'react';
import styled from 'styled-components';
import { fill } from '../styles/helpers';
import { Box } from './base';

const FooterWrapper = styled(Box)`
  position: relative;
  min-height: 80vh;
`;

const FooterBackground = styled.div`
  ${fill()};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterBackground></FooterBackground>
  </FooterWrapper>
);

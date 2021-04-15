import { Box } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { fill } from '../../theme/helpers';

const FooterWrapper = styled(Box)`
  position: relative;
  min-height: 80vh;
`;

const FooterBackground = styled.div`
  ${fill()};
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

export const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterBackground></FooterBackground>
  </FooterWrapper>
);

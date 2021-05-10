import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';

interface SvgProps extends BoxProps {
  Icon: typeof React.Component;
}

export const Wrapper = styled(Box)`
  display: inline-block;
  svg {
    height: ${(props) => (props.height ? '100%' : 'auto')};
    width: ${(props) => (props.width ? '100%' : 'auto')};
    max-width: 100%;
    max-height: 100%;
    color: inherit;
  }
`;

export const SvgIcon: React.FC<SvgProps> = ({ Icon, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Icon />
    </Wrapper>
  );
};

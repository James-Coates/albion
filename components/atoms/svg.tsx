import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const Svg = styled(Box)`
  display: inline-block;
  svg {
    height: ${(props) => (props.height ? '100%' : 'auto')};
    width: ${(props) => (props.width ? '100%' : 'auto')};
    max-width: 100%;
    max-height: 100%;
    color: inherit;
  }
`;

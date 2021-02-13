import styled from 'styled-components';
import { color, layout } from 'styled-system';
import { Box } from './box';

const IconWrapper = styled(Box)`
  ${layout};
  ${color};
  display: inline-block;
  svg {
    height: ${(props) => (props.height ? '100%' : 'auto')};
    width: ${(props) => (props.width ? '100%' : 'auto')};
    max-width: 100%;
    max-height: 100%;
    color: inherit;
  }
`;

export const Icon = ({ children, ...props }) => (
  <IconWrapper {...props}>{children}</IconWrapper>
);

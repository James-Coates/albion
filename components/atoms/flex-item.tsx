import { Box } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';

interface FlexProps extends FlexboxProps {
  children: React.ReactNode;
}

const styles = css`
  ${flexbox}
`;

export const FlexItem = styled(Box)<FlexProps>`
  ${styles}
`;

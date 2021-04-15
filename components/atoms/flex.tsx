import styled, { css } from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';
import { Box } from '@material-ui/core';

interface FlexProps extends FlexboxProps {
  children: React.ReactNode;
}

const styles = css`
  ${flexbox}
`;

export const Flex = styled(Box)<FlexProps>`
  ${styles}
`;

Flex.defaultProps = {
  display: 'flex',
};

Flex.propTypes = {
  ...Box.propTypes,
};

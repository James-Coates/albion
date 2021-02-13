import styled, { css } from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { Box } from './box';

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
  ...propTypes.flexbox,
};

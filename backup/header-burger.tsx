import { Theme } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { InferPropTypes } from '../../../lib/react/infer-proptypes';
import { Burger, burgerPropTypes } from '../burger';

const filteredProps = ['zIndex'];

const headerBurgerPropTypes = {
  ...burgerPropTypes,
  zIndex: PropTypes.number,
};

const defaultHeaderBurgerProps = {
  zIndex: 0,
};

type HeaderBurgerProps = InferPropTypes<
  typeof headerBurgerPropTypes,
  typeof defaultHeaderBurgerProps
>;

export const HeaderBurger = styled(Burger).withConfig({
  shouldForwardProp: (prop) => !filteredProps.includes(prop),
})<HeaderBurgerProps>`
  position: relative;
  z-index: ${({ zIndex }) => (zIndex ? zIndex : 0)};
  ${(props) => breakpointDisplay(props.theme)};
`;

HeaderBurger.propTypes = headerBurgerPropTypes;

HeaderBurger.defaultProps = defaultHeaderBurgerProps;

function breakpointDisplay(theme: Theme) {
  return css`
    ${theme.breakpoints.up('sm')} {
      display: none;
    }
  `;
}

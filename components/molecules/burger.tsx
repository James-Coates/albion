import { FC } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { InferPropTypes } from '../../lib/react/infer-proptypes';

const period = 200;

export const burgerPropTypes = {
  isActive: PropTypes.bool,
};

interface BurgerProps extends InferPropTypes<typeof burgerPropTypes> {
  className?: string;
  onClick?: () => any;
}

const BurgerComponent: FC<BurgerProps> = ({ isActive, ...props }) => (
  <button {...props}>
    <Inner>
      <Top />
      <Middle />
      <Bottom />
    </Inner>
  </button>
);

const Top = styled.div`
  top: 50%;
  right: 0;
  transform: translateY(-8px) scaleX(0.7);
  transform-origin: top right;
`;

const Middle = styled.div`
  top: 50%;
`;

const Bottom = styled.div`
  top: 50%;
  transform: translateY(8px);
`;

const Inner = styled.div`
  position: relative;
  height: 28px;
  width: 28px;

  & > div {
    position: absolute;
    height: 2px;
    width: 100%;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: white;
      /* transition: 300ms 300ms; */
    }
  }
`;

export const Burger = styled(BurgerComponent)`
  display: inline-block;
  padding: 8px;
  cursor: pointer;
  margin: -8px;
  border: none;
  outline: none;
  background-color: transparent;

  ${({ isActive }) =>
    isActive
      ? css`
          ${Inner} {
            & > div {
              transition: ${period}ms;
              &::before {
                transition: ${period}ms ${period}ms;
              }
            }
          }
          ${Top} {
            transform: translateY(0);
            &::before {
              transform: rotate(45deg);
            }
          }
          ${Middle} {
            opacity: 0;
          }
          ${Bottom} {
            transform: translateY(0);
            &::before {
              transform: rotate(-45deg);
            }
          }
        `
      : css`
          ${Inner} {
            & > div {
              transition: ${period}ms ${period}ms;
              &::before {
                transition: ${period}ms;
              }
            }
          }
        `}
`;

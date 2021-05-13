import styled, { css } from 'styled-components';

type CarouselDirection = 'left' | 'right';

interface CarouselNavigationButtonProps {
  direction: CarouselDirection;
}

export const CarouselNavigationButton = styled.button<CarouselNavigationButtonProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 16px;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  z-index: 2;
  opacity: 0.6;
  transition: opacity 0.2s ease-out;
  position: relative;
  margin: 16px;
  margin-left: 0;

  &:hover {
    opacity: 1;
  }

  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      position: absolute;
      top: calc(50% - 32px);
      color: ${({ theme }) => theme.palette.common.white};
      border-color: ${({ theme }) => theme.palette.common.white};
    }
  `}

  &.swiper-button-disabled {
    opacity: 0;
    cursor: default;
  }

  ${({ direction, theme }) =>
    direction === 'right'
      ? css`
          ${theme.breakpoints.up('md')} {
            right: 0;
            left: auto;
          }
        `
      : css`
          ${theme.breakpoints.up('md')} {
            right: auto;
            left: 0;
            margin-left: 16px;
          }
        `}

  svg {
    height: 40px;
  }
`;

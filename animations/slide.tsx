import { useRef } from 'react';
import transition from 'styled-transition-group';

export const SlideTop = transition.div`
  overflow: hidden;
  &:enter { max-height: 1px; }
  &:enter-active {
    max-height: 500px;

    transition: all ${({ timeout }) =>
      timeout}ms cubic-bezier(0.7, 0, 0.84, 0);
  }
  &:exit { max-height: 500px; }
  &:exit-active {
    max-height: 1px;
    transition: all ${({ timeout }) =>
      timeout}ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

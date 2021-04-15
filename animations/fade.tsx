import transition from 'styled-transition-group';

export const Fade = transition.div`
  &:enter { opacity: 0.01; }
  &:enter-active {
    opacity: 1;
    transition: opacity ${({ timeout }) => timeout}ms ease-in;
  }
  &:exit { opacity: 1; }
  &:exit-active {
    opacity: 0.01;
    transition: opacity  ${({ timeout }) => timeout}ms ease-in;
  }
`;

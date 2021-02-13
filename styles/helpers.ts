import { css } from 'styled-components';

type FillPosition = 'absolute' | 'fixed';

export const fill = (pos: FillPosition = 'absolute') => css`
  position: ${pos};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

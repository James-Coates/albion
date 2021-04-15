import { css } from 'styled-components';
import mapStyles from '../public/config/map-styles.json';

type FillPosition = 'absolute' | 'fixed';

export const fill = (pos: FillPosition = 'absolute') => css`
  position: ${pos};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export function createMapStyles(baseColor: string) {
  const json = JSON.stringify(mapStyles)
    .replace('#212121', '#1F3263')
    .replace('#181818', '#0f182f');
  return JSON.parse(json);
}

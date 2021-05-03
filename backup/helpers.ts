import mapStyles from '../public/config/map-styles.json';

export function createMapStyles(baseColor: string) {
  const json = JSON.stringify(mapStyles)
    .replace('#212121', '#1F3263')
    .replace('#181818', '#0f182f');
  return JSON.parse(json);
}

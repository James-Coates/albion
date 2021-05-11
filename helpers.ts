import mapStyles from 'public/config/map-styles.json';

export function isEven(n: number): boolean {
  return n % 2 === 0;
}

export function isOdd(n: number): boolean {
  return !isEven(n);
}

export const fetcher = (url: string) =>
  fetch(url).then((res) => res.json());

export function createMapStyles(baseColor: string) {
  const json = JSON.stringify(mapStyles)
    .replace('#212121', '#1F3263')
    .replace('#181818', '#0f182f');
  return JSON.parse(json);
}

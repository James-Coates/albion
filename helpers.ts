export function isEven(n: number): boolean {
  return n % 2 === 0;
}

export function isOdd(n: number): boolean {
  return !isEven(n);
}

export const fetcher = (url: string) =>
  fetch(url).then((res) => res.json());

export function filterColorProps(props: any) {
  const { color, bg, backgroundColor, opacity, ...rest } = props;
  return rest;
}

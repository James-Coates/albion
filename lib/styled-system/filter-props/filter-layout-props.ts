export function filterLayoutProps(props: any) {
  const {
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    display,
    verticalAlign,
    size,
    overflow,
    overflowX,
    overflowY,
    ...rest
  } = props;
  return rest;
}

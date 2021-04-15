export function filterTypographyProps(props: any) {
  const {
    fontSize,
    fontFamily,
    fontWeight,
    lineHeight,
    letterSpacing,
    fontStyle,
    textAlign,
    ...rest
  } = props;
  return rest;
}

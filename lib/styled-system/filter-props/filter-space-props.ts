export function filterSpaceProps(props: any) {
  const {
    m,
    margin,
    mt,
    marginTop,
    mr,
    marginRight,
    mb,
    marginBottom,
    ml,
    marginLeft,
    mx,
    marginX,
    my,
    marginY,
    p,
    padding,
    pt,
    paddingTop,
    pr,
    paddingRight,
    pb,
    paddingBottom,
    pl,
    paddingLeft,
    px,
    paddingX,
    py,
    paddingY,
    ...rest
  } = props;
  return rest;
}

import React from 'react';
import { useTheme } from 'styled-components';
import {
  HTMLMotionProps,
  motion,
  TargetAndTransition,
} from 'framer-motion';

interface HoverColorLinkProps extends HTMLMotionProps<'a'> {
  color?: 'primary' | 'secondary';
}

export const HoverColorLink = React.forwardRef<
  HTMLAnchorElement,
  HoverColorLinkProps
>(({ color, children, ...rest }, ref) => {
  const theme = useTheme();

  const whileHover: TargetAndTransition = {
    color: color
      ? theme.palette[color].main
      : theme.palette.secondary.main,
  };

  return (
    <motion.a {...rest} whileHover={whileHover} ref={ref}>
      {children}
    </motion.a>
  );
});

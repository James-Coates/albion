import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC } from 'react';
import { useLayoutDispatch } from 'state/layout/layout-state';

export const Link: FC<NextLinkProps> = ({ children, ...rest }) => {
  const dispatch = useLayoutDispatch();
  const onLinkClick = () => {
    dispatch({
      type: 'setLoading',
      payload: true,
    });
  };
  return (
    <NextLink {...rest}>
      <a onClick={onLinkClick}>{children}</a>
    </NextLink>
  );
};

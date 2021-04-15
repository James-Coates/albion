import { FC } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Box, Grid, Typography } from '@material-ui/core';
import { InferPropTypes } from '../../lib/react/infer-proptypes';

const propTypes = {
  active: PropTypes.bool,
};

interface props extends InferPropTypes<typeof propTypes> {
  className?: string;
}

const MenuGrid = styled(Grid)`
  ${({ theme }) => css`
    ${theme.breakpoints.down('xs')} {
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 20%;
    }
  `};
`;

const MenuLink = styled.a`
  display: block;
`;

const MenuComponent: FC<props> = ({ className }) => (
  <div className={className}>
    <MenuGrid container spacing={4}>
      <Grid item>
        <Link href="/" passHref>
          <MenuLink>
            <Typography variant="body2" component="span">
              About
            </Typography>
          </MenuLink>
        </Link>
      </Grid>
      <Grid item>
        <Link href="/" passHref>
          <MenuLink>
            <Typography variant="body2" component="span">
              Contact
            </Typography>
          </MenuLink>
        </Link>
      </Grid>
    </MenuGrid>
  </div>
);

export const Menu = styled(MenuComponent)`
  position: relative;
  zindex: 2;
  color: white;
  padding: 4px 0;
  position: fixed;
  top: -100vh;
  height: 100%;
  /* width: 100%; */
  left: 0;
  transition: 300ms;

  ${({ theme, active }) => css`
    ${theme.breakpoints.down('xs')} {
      background-color: ${theme.palette.primary.main};
      ${active
        ? css`
            transform: translateY(100%);
          `
        : null}
    }
    ${({ theme }) => theme.breakpoints.up('sm')} {
      position: relative;
      top: auto;
    }
  `}
`;

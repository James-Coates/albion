import React from 'react';
import styled, { css } from 'styled-components';
import BlockContent, {
  BlockContentProps,
} from '@sanity/block-content-to-react';
import { Box, Grid, GridProps, Typography } from '@material-ui/core';
import { serializers } from 'sanity-client.config';

type StaggeredProps = GridProps;

export const StaggeredLeftWrapper = styled(Grid)`
  max-width: 800px;
`;

export const StaggeredLeft: React.FC = ({ children }) => (
  <StaggeredLeftWrapper item xs={12} md={5}>
    {children}
  </StaggeredLeftWrapper>
);

export const StaggeredRightWrapper = styled(Grid)`
  max-width: 500px;
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      padding-top: ${theme.spacing(10)};
    }
  `}
`;

export const StaggeredRight: React.FC = ({ children }) => (
  <StaggeredRightWrapper item xs={12} md={6}>
    {children}
  </StaggeredRightWrapper>
);

export const Staggered: React.FC<StaggeredProps> = ({
  children,
  ...rest
}) => (
  <Grid container {...rest}>
    {children}
  </Grid>
);

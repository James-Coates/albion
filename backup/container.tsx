import styled, { css } from 'styled-components';
import {
  Container as MuiContainer,
  ContainerProps,
  withStyles,
} from '@material-ui/core';

interface MyContainerProps extends ContainerProps {
  overflowHidden: boolean;
}

const BaseContainer = withStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    // overflow: 'hidden',
  },
}))(MuiContainer);

export const Container = styled(({ overflowHidden, ...rest }) => (
  <BaseContainer {...rest} />
))<MyContainerProps>`
  ${({ overflowHidden }) =>
    overflowHidden
      ? css`
          overflow-x: 'hidden';
        `
      : null}
`;

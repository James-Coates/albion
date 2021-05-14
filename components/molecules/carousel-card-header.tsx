import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';

export const CarouselCardHeader = styled(Box)`
  position: absolute;
  top: 1.6rem;
  left: 1.6rem;
  right: 1.6rem;
`;

CarouselCardHeader.defaultProps = {
  color: 'common.white',
};

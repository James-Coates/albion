import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';

export const CarouselCardText = styled(Box)`
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  width: 80%;
  transform: translateY(-50%);
`;

CarouselCardText.defaultProps = {
  color: 'primary',
};

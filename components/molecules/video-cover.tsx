import styled, { css } from 'styled-components';

interface VideoCoverProps {
  zIndex?: number;
}

export const VideoCover = styled.video<VideoCoverProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  ${({ zIndex }) =>
    zIndex
      ? css`
          z-index: ${zIndex};
        `
      : null}
`;

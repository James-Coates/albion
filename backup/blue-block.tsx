import { LinearProgress } from '@material-ui/core';
import { useLayoutContext } from 'state/layout/layout-state';
import styled, { css } from 'styled-components';

interface BlueBlockProps {
  in: boolean;
}

// const Block = styled.div<BlueBlockProps>`
//   position: fixed;
//   background-color: blue;
//   height: 100vh;
//   width: 100vw;
//   z-index: 10;
//   transition: 500ms;

//   ${(props) =>
//     props.in
//       ? css`
//           transform: translateX(0);
//         `
//       : css`
//           transform: translateX(100%);
//         `}
// `;

const Block = styled.div<BlueBlockProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: 800ms;
  ${(props) =>
    props.in
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;

export const BlueBlock = () => {
  const { headerFloat, loading } = useLayoutContext();

  return (
    <Block in={loading}>
      <LinearProgress color="primary" />
    </Block>
  );
};

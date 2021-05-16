import { motion, Variants } from 'framer-motion';
import styled, { css } from 'styled-components';
import { Portal } from './portal';
import { Close } from '@styled-icons/evil';

interface ModalProps {
  active?: boolean;
  onCloseClick?: () => any;
}

const Wrapper = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  background-color: black;
  top: 0;
  left: 0;
`;

const Inner = styled(motion.div)`
  position: absolute;
  height: calc(100% - 56px);
  width: 95%;
  background-color: black;
  top: 40px;
  left: 2.5%;

  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      height: calc(100% - 128px);
      width: calc(100% - 128px);
      top: 64px;
      left: 64px;
    }
  `}
`;

const Button = styled(motion.button)`
  color: ${({ theme }) => theme.palette.secondary.main};
  background-color: black;
  position: absolute;
  height: 40px;
  width: 40px;
  top: -40px;
  left: calc(50% - 20px);
  border-radius: 50% 50% 0 0;
  cursor: pointer;
  padding: 0;
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      top: -48px;
    }
  `}
`;

const wrapperMotion: Variants = {
  rest: {
    opacity: 0,
    scale: 0,
    transition: { delay: 0.4, duration: 0.4 },
  },
  open: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const innerMotion: Variants = {
  rest: { opacity: 0, transition: { duration: 0.4 } },
  open: { opacity: 1, transition: { delay: 0.4, duration: 0.4 } },
};

export const Modal: React.FC<ModalProps> = ({
  children,
  active,
  onCloseClick,
}) => {
  return (
    <Portal selector="modal-root">
      <Wrapper
        variants={wrapperMotion}
        initial="rest"
        animate={active ? 'open' : 'rest'}
      >
        <Inner variants={innerMotion}>
          <Button onClick={onCloseClick}>
            <Close height={40} />
          </Button>
          {children}
        </Inner>
      </Wrapper>
    </Portal>
  );
};

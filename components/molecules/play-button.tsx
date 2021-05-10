import React from 'react';
import { motion, Variants } from 'framer-motion';
import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';

const Circle = styled(motion.div)`
  border: 2px solid #fff;
  border-radius: 50%;
  display: block;
  cursor: pointer;
  position: relative;
  width: 20vw;
  height: 20vw;
  margin: 0 auto;
  background-color: transparent;
  overflow: hidden;

  ${({ theme }) => css`
    ${theme.breakpoints.up('sm')} {
      height: 116px;
      width: 116px;
    }
  `}
`;

const Play = styled(motion.span)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  border-style: solid;
  border-width: 12px 0 12px 15px;
  border-color: transparent transparent transparent #fff;

  ${({ theme }) => css`
    ${theme.breakpoints.up('sm')} {
      border-width: 18px 0 18px 22px;
    }
  `}
`;

const Fill = styled(motion.span)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.palette.common.white};
  height: 110%;
  width: 110%;
  border-radius: 50%;
  z-index: -1;
`;

const playMotion: Variants = {
  rest: { borderLeftColor: '#fff' },
  hover: { borderLeftColor: '#000', transition: { duration: 0.8 } },
};

const fillMotion: Variants = {
  rest: { opacity: 0, scale: 0, x: '-50%', y: '-50%' },
  hover: {
    opacity: 1,
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4 },
  },
};

export const PlayButton: React.FC = ({ children }) => {
  return (
    <Circle whileHover="hover" initial="rest" animate="rest">
      <Play variants={playMotion} />
      <Fill variants={fillMotion} />
    </Circle>
  );
};

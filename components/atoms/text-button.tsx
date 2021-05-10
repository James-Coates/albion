import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
// Local
import { SvgIcon } from './svg';
// External
import { Typography } from '@material-ui/core';
// Public
import ArrowRight from '../../public/svg/right-arrow.svg';

const Wrapper = styled(motion.span)`
  position: relative;
  cursor: pointer;
  padding-bottom: 2px;
  display: inline-block;
  align-items: center;
`;

const Text = styled(Typography)`
  padding-right: 32px;
`;

const IconBox = styled(motion.span)`
  position: absolute;
  right: 0;
  top: 2px;
`;

const iconMotion: Variants = {
  rest: { x: 0, transition: { duration: 0.6, type: 'spring' } },
  hover: { x: 4, transition: { duration: 0.6, type: 'spring' } },
};

export const TextButton: React.FC = ({ children }) => {
  return (
    <Wrapper whileHover="hover" initial="rest" animate="rest">
      <Text variant="button">{children}</Text>
      <IconBox variants={iconMotion}>
        <SvgIcon
          height={20}
          Icon={ArrowRight}
          color="secondary.main"
        />
      </IconBox>
    </Wrapper>
  );
};

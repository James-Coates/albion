import React from 'react';
import styled from 'styled-components';
import { motion, TargetAndTransition } from 'framer-motion';
// Local
import { SvgIcon } from './svg';
// External
import { Typography } from '@material-ui/core';
// Public
import DownArrow from '../../public/svg/down-arrow.svg';

const Wrapper = styled(motion.div)`
  display: inline-flex;
  align-items: flex-end;
  cursor: pointer;
  color: white;
`;

const IconMotion = styled(motion.div)`
  margin-right: 16px;
`;

const iconMotion: TargetAndTransition = {
  y: [-4, -4, -12, -4, -8, -4, -4],
  transition: { repeat: Infinity, duration: 2.5 },
};

export const ScrollButton: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <IconMotion animate={iconMotion}>
        <SvgIcon height={24} Icon={DownArrow} />
      </IconMotion>
      <Typography variant="button">{children}</Typography>
    </Wrapper>
  );
};

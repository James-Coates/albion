import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { ChevronThinDown } from '@styled-icons/entypo/ChevronThinDown';
import { motion } from 'framer-motion';

const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: inherit;
`;

const arrowAnimation = {
  y: [0, 0, 0, 12, 0, 6, 0, 0],
  transition: { type: 'spring', repeat: Infinity, duration: 2 },
};

export const ScrollButton: React.FC = () => {
  return (
    <Button>
      <Typography variant="body2">Find out more</Typography>
      <motion.div animate={arrowAnimation}>
        <ChevronThinDown height={20} />
      </motion.div>
    </Button>
  );
};

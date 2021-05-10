import React from 'react';
import styled, { css } from 'styled-components';
import { Box, Container, Typography } from '@material-ui/core';
import { TourSlider } from '@components/organisms/tour-slider';
import { Tour } from '@type/tour';
import { Button } from '@components/atoms';
import { Fade } from 'react-reveal';
import { InView, useInView } from 'react-intersection-observer';
import { motion, Variants } from 'framer-motion';

interface FeaturedToursProps {
  tours: Tour[];
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
  ${({ theme }) => css`
    ${theme.breakpoints.up('sm')} {
      order: 1;
    }
  `}
`;
const ButtonContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing(3)} 0;
    ${theme.breakpoints.up('sm')} {
      order: 2;
      margin-bottom: 80px;
    }
  `}
`;
const SliderContainer = styled.div`
  ${({ theme }) => css`
    ${theme.breakpoints.up('sm')} {
      order: 3;
      margin-bottom: -56px;
    }
  `}
`;

export const FeaturedTours: React.FC<FeaturedToursProps> = ({
  tours,
}) => {
  const [show, setShow] = React.useState<boolean>(false);

  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      x: '-5rem',
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  function onchange(inView: boolean) {
    if (inView) {
      setShow(true);
    }
  }

  return (
    <Box pb={7}>
      <Wrapper bgcolor="primary.dark" pt={15} color="white">
        <Intro>
          <Container maxWidth="lg">
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={show ? 'visible' : 'hidden'}
              variants={contentVariants}
              transition={{ duration: 1 }}
            > */}
            <Box color="white" maxWidth={560}>
              <Box mb={3}>
                <Typography variant="h2">Featured Tours</Typography>
              </Box>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Corporis aliquam reiciendis autem asperiores
                dolorem, voluptatum cupiditate corrupti aspernatur.
                Assumenda explicabo asperiores nisi adipisci veniam.
                Aspernatur vitae sequi consectetur expedita cumque?
              </Typography>
            </Box>
            {/* </motion.div> */}
          </Container>
        </Intro>
        <SliderContainer>
          {/* <InView onChange={onchange} triggerOnce> */}
          <TourSlider tours={tours} />
          {/* </InView> */}
        </SliderContainer>
        <ButtonContainer>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0 }}
              animate={show ? 'visible' : 'hidden'}
              variants={contentVariants}
              transition={{ duration: 1 }}
            >
              <Button>View all tours</Button>
            </motion.div>
          </Container>
        </ButtonContainer>
      </Wrapper>
    </Box>
  );
};

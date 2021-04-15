import { Box, Container, Typography } from '@material-ui/core';
import { FC } from 'react';
import { TourSlider } from '@components/organisms/tour-slider';
import { Tour } from '@type/tour';
import { Button } from '@components/atoms';
import styled, { css } from 'styled-components';

interface FeaturedToursProps {
  tours: Tour[];
}

const Wrapper = styled.div`
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

export const FeaturedTours: FC<FeaturedToursProps> = ({ tours }) => {
  return (
    <Box bgcolor="primary.dark" pt={15} color="white">
      <Wrapper>
        <Intro>
          <Container maxWidth="lg">
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
              </Typography>{' '}
            </Box>
          </Container>
        </Intro>
        <SliderContainer>
          <TourSlider tours={tours} />
        </SliderContainer>
        <ButtonContainer>
          <Container maxWidth="lg">
            <Button>View all tours</Button>
          </Container>
        </ButtonContainer>
      </Wrapper>
    </Box>
  );
};

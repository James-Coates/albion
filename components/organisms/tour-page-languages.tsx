import { FadeOnScroll } from '@components/animations';
import { Flag } from '@components/atoms/flag';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

interface TourPageLanguagesProps {
  languages: string[];
}

const LanguageGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const LanguageGridItem = styled.div`
  flex: 0 0 50%;
  text-align: center;
  filter: grayscale(0.35);
  transition: filter 300ms;

  &:hover {
    filter: grayscale(0);
  }

  ${({ theme }) => `
      padding: 16px;

    ${theme.breakpoints.up('sm')} {
      flex: 0 0 10%;
      padding: 24px;
    }
  `}
`;

export const TourPageLanguages: React.FC<TourPageLanguagesProps> = ({
  languages,
}) => (
  <Box py="10vw" bgcolor="grey.100">
    <Container maxWidth="md">
      <Box textAlign="center">
        <Typography variant="h3" color="primary" gutterBottom>
          Experience the tour in your language
        </Typography>
        <Typography>
          Get the most of your tour with our tailored audio experience
          available in a wide array of languages. You can experience
          this tour in any of the following languages:
        </Typography>
      </Box>
    </Container>
    <Container maxWidth="xl">
      <Box mt={6}>
        <FadeOnScroll>
          <LanguageGrid>
            {languages.map((language) => (
              <LanguageGridItem key={language}>
                <Box width="50%" margin="0 auto 4px">
                  <Flag country={language} />
                </Box>
                <Typography variant="overline" color="grey.600">
                  {language}
                </Typography>
              </LanguageGridItem>
            ))}
          </LanguageGrid>
        </FadeOnScroll>
      </Box>
    </Container>
  </Box>
);

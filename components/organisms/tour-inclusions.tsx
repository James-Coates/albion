import React from 'react';
import { IconItem, Section } from '@components/molecules';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { ListItem } from '@components/atoms';
import { Inclusions } from '../../types/inclusions';

interface TourInclusionsProps {
  inclusions: Inclusions;
}

export const TourInclusions: React.FC<TourInclusionsProps> = ({
  inclusions,
}) => {
  return (
    <Section color="text.primary">
      <Container maxWidth="lg">
        <Box maxWidth={600} mb="10vh">
          <Typography variant="h1" color="primary">
            What's included?
          </Typography>
        </Box>
        <Grid container justify="space-between">
          <Grid item xs={12} md={5}>
            <Typography variant="h4" component="h3" color="primary">
              Included
            </Typography>
            <ul>
              {inclusions.inclusions.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="h4" component="h3" color="primary">
              Not Included
            </Typography>
            <ul>
              {inclusions.exclusions.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

import { Timeline } from '@components/molecules/timeline';
import { Box, Container, Typography } from '@material-ui/core';
import { FC } from 'react';
import styled, { css } from 'styled-components';

interface TourTimelineProps {}

const TimelineContainer = styled(Container)`
  max-width: 800px;
`;

export const TourTimeline: FC<TourTimelineProps> = () => {
  return (
    <Box py={20}>
      <Container maxWidth="lg">
        <Typography variant="h2">The trip</Typography>
      </Container>
      <Box my={20}>
        <TimelineContainer maxWidth="md">
          <Timeline></Timeline>
        </TimelineContainer>
      </Box>
    </Box>
  );
};

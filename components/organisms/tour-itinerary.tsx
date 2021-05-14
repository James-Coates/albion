import React, { useState } from 'react';
// Internal
import { TourMap, Timeline } from '@components/molecules';
// External
import { Box, Container, Grid, Typography } from '@material-ui/core';
// Types
import { ItineraryItem } from '@type/ItineraryItem';
import { itineraryToTimeline } from '@api/transformers/itinerary-to-timline';

interface TourItineraryProps {
  itinerary: ItineraryItem[];
}

export const TourItinerary: React.FC<TourItineraryProps> = ({
  itinerary,
}) => {
  const [active, setActive] = useState<number>();

  function onTimelineVisibilityChange(
    index: number,
    inView: boolean,
    entry: IntersectionObserverEntry,
  ) {
    if (!inView) {
      return;
    }

    const x = entry.intersectionRatio > 0.7;
    const newActive = inView && x ? index : null;

    if (newActive || newActive === 0) {
      setActive(newActive);
    }
  }

  return (
    <Box position="relative" color="text.primary">
      <Grid container>
        <Grid item xs={12} md={6}>
          <TourMap itinerary={itinerary} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Container maxWidth="sm">
            <Box my={8}>
              <Typography variant="h2" color="primary">
                Itinerary
              </Typography>
            </Box>
            <Timeline
              items={itineraryToTimeline(itinerary)}
              activeItem={active}
              onItemVisibilityChange={onTimelineVisibilityChange}
            ></Timeline>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

import { Box, Grid, TextField, Typography } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { FC, useState } from 'react';
import { Button } from '../atoms';
import { Container } from '../molecules';
import * as moment from 'moment';
import { useAppDispatch } from '../../state';
import { useRouter } from 'next/router';
import { Tour } from '../../types';

interface TourBookProps {
  tour: Tour;
}

export const TourBook: FC<TourBookProps> = ({ tour }) => {
  const router = useRouter();
  const [guests, setGuests] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState(moment.utc());
  const dispatch = useAppDispatch();

  function onBookNow() {
    dispatch({
      type: 'set',
      payload: {
        tour,
        guests,
        date: selectedDate,
        price: guests * tour.price,
      },
    });
    router.push('/book-tour/your-info');
  }

  return (
    <Box bgcolor="grey.200">
      <Container>
        <Grid container justify="space-around">
          <Grid item>
            <Typography variant="h2">Book this tour</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="guests"
              label="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              type="number"
              inputProps={{ max: 5, min: 0 }}
              fullWidth
            />
            <DatePicker
              value={selectedDate}
              onChange={(e) => setSelectedDate(e)}
            />
            <Button onClick={onBookNow}>Book now</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

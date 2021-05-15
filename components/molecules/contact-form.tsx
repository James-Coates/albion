import React from 'react';
import { useForm } from 'react-hook-form';
// External
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
} from '@material-ui/core';

const queryTypes = [
  'General question',
  'Group tour or private bookings',
  'We are an agency and would like to get involved.',
];

export const ContactForm: React.FC = () => {
  const { register, errors, handleSubmit } = useForm();

  const [queryType, setQueryType] = React.useState<string>('');
  const handleChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setQueryType(event.target.value as string);
  };
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container justify="space-between" spacing={4}>
        <Grid item xs={12} md={6}>
          <TextField
            name="first"
            required
            id="first"
            label="First Name"
            fullWidth
            inputRef={register({ required: true })}
            error={errors?.first !== undefined}
            helperText={
              errors?.first ? 'Please enter your first name' : ''
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="last"
            required
            id="last"
            label="Last Name"
            fullWidth
            inputRef={register({ required: true })}
            error={errors?.last !== undefined}
            helperText={
              errors?.first ? 'Please enter your last name' : ''
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="email"
            id="email"
            required
            label="Email"
            fullWidth
            type="email"
            inputRef={register({
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            error={errors?.email !== undefined}
            helperText={
              errors?.email
                ? 'Please enter a valid email address'
                : ''
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="phone"
            id="phone"
            label="Phone number"
            fullWidth
            type="tel"
            inputRef={register}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="type"
            id="type"
            required
            select
            label="What's your query about?"
            value={queryType}
            onChange={handleChange}
            fullWidth
            inputRef={register({ required: true })}
            error={errors?.type !== undefined}
            helperText={
              errors?.type
                ? 'Please select a query topic from the options above'
                : ''
            }
          >
            {queryTypes.map((option, i) => (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="message"
            id="message"
            multiline
            required
            label="Please leave your message here"
            fullWidth
            rows={8}
            inputRef={register({ required: true })}
            error={errors?.message !== undefined}
            helperText={
              errors?.message ? 'Please enter your message above' : ''
            }
          />
        </Grid>
      </Grid>
      <Box mt={4} textAlign="right">
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
};

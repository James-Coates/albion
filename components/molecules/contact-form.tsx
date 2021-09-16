import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
// External
import {
  Alert,
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Snackbar,
} from '@material-ui/core';

const queryTypes = [
  'General question',
  'Group tour or private bookings',
  'We are an agency and would like to get involved.',
];

interface DisableProps {
  isDisabled: boolean;
}

const Disable = styled.div<DisableProps>`
  ${({ isDisabled }) =>
    isDisabled
      ? css`
          opacity: 0.5;
          pointer-events: none;
        `
      : null}
`;

export const ContactForm: React.FC = () => {
  const { register, errors, handleSubmit, setValue } = useForm();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const onSubmit = async (formData: any) => {
    setDisabled(true);
    const test = await fetch(`/api/email`, {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    const data = await test.json();
    console.log(data);
    setOpen(true);
  };

  const handleClose = (
    event: SyntheticEvent<Element, Event>,
    reason?: string,
  ) => {
    setOpen(false);
    setDisabled(false);
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Disable isDisabled={disabled}>
        <Grid container justifyContent="space-between" spacing={4}>
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
              name="queryType"
              id="queryType"
              required
              select
              label="What's your query about?"
              inputRef={
                register({
                  name: 'queryType',
                  required: true,
                }) as any
              }
              defaultValue=""
              onChange={(e) =>
                setValue('queryType', e.target.value, {
                  shouldValidate: true,
                })
              }
              fullWidth
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
                errors?.message
                  ? 'Please enter your message above'
                  : ''
              }
            />
          </Grid>
        </Grid>
        <Box mt={4} textAlign="right">
          <Button type="submit">Submit</Button>
        </Box>
      </Disable>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success">
          Your message was sent successfully, we will get back to you
          as soon as possible!
        </Alert>
      </Snackbar>
    </form>
  );
};

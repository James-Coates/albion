import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Button } from '../../../components/atoms';
import { Layout } from '../../../components/layouts/layout';
import { Container } from '../../../components/molecules';
import {
  BookingState,
  useAppContext,
  useAppDispatch,
} from '../../../state';
import {
  Controller,
  RegisterOptions,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { useRouter } from 'next/router';
import { get } from 'lodash';
import Image from 'next/image';

const years = [2020, 2019, 2018, 2017];

interface ControllerData {
  name: string;
  type: 'text' | 'select' | 'checkbox' | 'radio';
  label: string;
  defaultValue?: any;
  placeholder?: '';
  rules: Exclude<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
}

const mainGuestFields: ControllerData[] = [
  {
    name: 'firstName',
    type: 'text',
    label: 'First Name',
    defaultValue: '',
    placeholder: '',
    rules: {
      required: {
        value: true,
        message: 'First name is required!',
      },
    },
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
    defaultValue: '',
    placeholder: '',
    rules: {
      required: {
        value: true,
        message: 'Last name is required!',
      },
    },
  },
];

export const YourInfo = () => {
  const { tour, guests, date, price, guestDetails } = useAppContext();

  const { control, errors, handleSubmit } = useForm();
  const {
    fields,
    append,
    prepend,
    remove,
    swap,
    move,
    insert,
  } = useFieldArray({
    control,
    name: 'otherGuests',
  });

  const router = useRouter();
  const [guestsInput, setGuests] = useState<number>(0);
  const [otherGuestDetails, setOtherGuestDetails] = useState<any[]>(
    [],
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (guests) {
      setGuests(guests);

      let guestDetails = [];
      for (let i = 1; i < guests; i++) {
        guestDetails.push(i + 1);
      }
      setOtherGuestDetails(guestDetails);
    }
    console.log('test1');
  }, [guests]);

  useEffect(() => {
    if (!tour) {
      router.push('/');
    }
  }, []);

  const handleCheckout = () => {
    // dispatch({
    //   type: 'setGuestDetails',
    //   payload: {
    //     guestDetails: {
    //       mainGuest: mainGuestDetails,
    //     },
    //   },
    // });
  };

  const handleChangeGuests = (value: string): void => {
    const n = Number(value);
    setGuests(n);
    dispatch({
      type: 'setNumberOfGuests',
      payload: {
        guests: n,
        price: n * tour?.price,
      },
    });
  };

  const onSubmit = (data) => console.log(data, errors);

  const [isBraintreeReady, setIsBraintreeReady] = useState<boolean>(
    false,
  );
  const [deviceData, setDeviceData] = useState<boolean>(false);

  const onAuthorizationSuccess = () => {
    setIsBraintreeReady(true);
  };

  const onDataCollectorInstanceReady = (
    err,
    dataCollectorInstance,
  ) => {
    if (!err) setDeviceData(dataCollectorInstance.deviceData);
  };

  const handleError = (err) => {
    console.warn(err);
  };

  return (
    <Layout headerVariant="block">
      <Box pt={7}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={8}>
              <Block>
                <Container maxWidth="md">
                  <Typography variant="h1" color="primary">
                    Your information
                  </Typography>

                  <Typography>Passenger 1</Typography>
                  {mainGuestFields.map((field) => (
                    <Box my={4} maxWidth={300} key={field.name}>
                      <Controller
                        name={field.name}
                        control={control}
                        defaultValue={field.defaultValue}
                        rules={field.rules}
                        render={({ onChange, value }) => (
                          <TextField
                            onChange={onChange}
                            label={field.label}
                            value={value}
                            error={
                              get(errors, `${field.name}`) !==
                              undefined
                            }
                            helperText={
                              get(errors, `${field.name}`) !==
                              undefined
                                ? get(errors, `${field.name}.message`)
                                : null
                            }
                          />
                        )}
                      />
                    </Box>
                  ))}

                  <Box my={4} maxWidth={300}>
                    <Controller
                      name="yearOfBirth"
                      control={control}
                      defaultValue=""
                      render={({ onChange, value }) => (
                        <TextField
                          fullWidth
                          select
                          label="Birth Year"
                          defaultValue=""
                          onChange={onChange}
                          value={value}
                        >
                          {years.map((year) => (
                            <MenuItem key={year} value={year}>
                              {year}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                    />
                  </Box>

                  {otherGuestDetails.map((n) => [
                    <Typography key={n}>Passenger {n}</Typography>,
                    ...mainGuestFields.map((field) => (
                      <Box my={4} maxWidth={300} key={field.name}>
                        <Controller
                          name={`otherGuests[${n}].${field.name}`}
                          control={control}
                          defaultValue={field.defaultValue}
                          rules={field.rules}
                          render={({ onChange, value }) => (
                            <TextField
                              onChange={onChange}
                              label={field.label}
                              value={value}
                              error={
                                get(
                                  errors,
                                  `otherGuests[${n}].${field.name}`,
                                ) !== undefined
                              }
                              helperText={
                                get(
                                  errors,
                                  `otherGuests[${n}].${field.name}`,
                                ) !== undefined
                                  ? get(
                                      errors,
                                      `otherGuests[${n}].${field.name}.message`,
                                    )
                                  : null
                              }
                            />
                          )}
                        />
                      </Box>
                    )),
                  ])}
                </Container>
              </Block>
            </Grid>
            <Grid item xs={4}>
              <Box bgcolor="grey.200" height="100%">
                <Container>
                  <Block>
                    <Typography variant="h3" component="h2">
                      Trip Summary
                    </Typography>
                    <Image
                      src={tour?.image as string}
                      width={500}
                      height={200}
                    />
                    <Typography>
                      booking {tour?.title}, for {guests} guests on
                      the
                    </Typography>
                    <TextField
                      id="guests"
                      label="guests"
                      value={guestsInput}
                      onChange={(e) =>
                        handleChangeGuests(e.target.value)
                      }
                      type="number"
                      inputProps={{ max: 5, min: 0 }}
                      fullWidth
                    />
                    <Typography>
                      {guestDetails?.mainGuest.firstName}
                    </Typography>
                    <Typography>
                      {guestDetails?.mainGuest.lastName}
                    </Typography>

                    <Typography variant="body1" component="span">
                      Total
                    </Typography>
                    <Typography variant="h2" component="span">
                      £{price}
                    </Typography>

                    <FormControlLabel
                      control={
                        <Checkbox name="checkedA" color="primary" />
                      }
                      label="I have read and accept the terms and conditions"
                    />

                    <Box>
                      <Button type="submit">Checkout</Button>
                    </Box>
                  </Block>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </form>

        <Block>
          <Container maxWidth="lg">
            <Typography variant="h2">Payment</Typography>
            <Braintree
              className={isBraintreeReady ? '' : 'disabled'}
              authorization="sandbox_d5v3qcpx_z59jb8jj8n6kfhqq"
              onAuthorizationSuccess={onAuthorizationSuccess}
              onDataCollectorInstanceReady={
                onDataCollectorInstanceReady
              }
              onError={handleError}
              styles={{
                input: {
                  'font-size': '16px',
                  'font-family': 'Work Sans, Arial, sans-serif',
                  color: '#3a3a3a',
                },
                ':focus': {
                  color: 'black',
                },
              }}
            >
              <div className="fields">
                <FormControl>
                  <Typography>Card number</Typography>
                  <HostedField
                    className="hosted-field"
                    placeholder="1111 1111 1111 1111"
                    type="number"
                  />
                </FormControl>
                <FormControl>
                  <Typography>Expiration date</Typography>
                  <HostedField
                    className="hosted-field"
                    placeholder="MM/YY"
                    type="expirationDate"
                  />
                </FormControl>
                <FormControl>
                  <Typography>CVV</Typography>

                  <HostedField
                    className="hosted-field"
                    placeholder="123"
                    type="cvv"
                  />
                </FormControl>
              </div>
              <Button onClick={onSubmit}>Submit</Button>
            </Braintree>
          </Container>
        </Block>

        <Button onClick={() => console.log(errors)}>errors</Button>
      </Box>
    </Layout>
  );
};

export default YourInfo;

import React, { useEffect } from 'react';
import { Layout } from '@components/layouts';
import {
  Box,
  Container,
  List,
  Typography,
  ListItem,
  Grid,
} from '@material-ui/core';
import { useLayoutDispatch } from '@state/layout/layout-state';

const About: React.FC = () => {
  const dispatch = useLayoutDispatch();

  const setHeaderFloat = (float: boolean): void =>
    dispatch({
      type: 'setHeaderFloat',
      payload: float,
    });

  useEffect(() => {
    setHeaderFloat(true);
    return () => {
      setHeaderFloat(false);
    };
  }, []);
  return (
    <Layout>
      <Box pt={20} pb={10}>
        <Container maxWidth="lg">
          <Box maxWidth="600px">
            <Typography color="primary" variant="h1" gutterBottom>
              Terms & Conditions
            </Typography>
          </Box>

          <Box mb={5}>
            <Typography variant="h4" gutterBottom component="h2">
              Standard Booking Conditions of Albion Touring.
            </Typography>
            <Typography variant="body1">
              These are the standard Booking Conditions of Albion
              Touring. These Booking Conditions – along with any other
              written information brought to your attention before we
              confirmed your booking – form the basis of your contract
              with Albion Touring. In these Booking Conditions we will
              refer to Albion Touring as ‘we’ or ‘us’. Please read
              these booking conditions carefully, as they set out our
              respective rights and obligations. In these Booking
              Conditions references to “you” and “your” include the
              first named person on the booking and all persons on
              whose behalf a booking is made or any other person to
              whom a booking is added or transferred. By making a
              booking, the first named person on the booking agrees on
              behalf of all persons detailed on the booking that:
            </Typography>

            <ol>
              <li>
                <Typography>
                  He/she has read these terms and conditions, has the
                  authority to be bound by them and agrees to be bound
                  by them;
                </Typography>
              </li>
              <li>
                <Typography>
                  He/she consents to our use of information in
                  accordance with our Privacy policy;
                </Typography>
              </li>
              <li>
                <Typography>
                  He/she is over 18 years of age and where placing an
                  order for services with age restrictions declares
                  that he/she and all members of the party are of the
                  appropriate age to purchase those services.
                </Typography>
              </li>
              <li>
                <Typography>
                  Accepts that all bookings made with Albion Touring
                  are bound by English law and fall within the
                  jurisdiction of England.
                </Typography>
              </li>
            </ol>
            <Typography>
              Our obligations to you vary depending upon whether you
              book a single component with us as Principal or whether
              you purchase from us a Package Holiday sold as
              Principal. A “Package” means the pre-arranged
              combination of at least two of the following components
              when sold or offered for sale at an inclusive price and
              when the service covers a period of more than
              twenty-four hours or includes overnight accommodation:
              transport; accommodation; other tourist services not
              ancillary to transport or accommodation and accounting
              for a significant proportion of the package. All
              Packages offered for sale with us, which include an
              overnight stay, transport and excursions are Packages
              for the purpose of the Package Travel Regulations. This
              means that any Principal Single Component bookings; such
              as a “transfer” for example, does not constitute a
              Package as defined in the Package Travel, Package
              Holidays and Package Tours Regulations 1992.
            </Typography>
          </Box>
          <Box mb={5}>
            <Typography variant="h4" gutterBottom component="h2">
              International Bookings
            </Typography>
            <Typography variant="body1">
              All bookings made directly or via one of our agents
              either in the UK or internationally are subject to
              English Law and Jurisdiction. By making a booking and
              paying your deposit either directly or via our agent,
              you accept that English Law and Jurisdiction apply.
              Under no circumstances will the law and jurisdiction of
              the country (other than England and Wales) in which the
              international booking was made apply.
            </Typography>
          </Box>
          <Box mb={5}>
            <Typography variant="h4" gutterBottom component="h2">
              Booking and Paying For Your Arrangements
            </Typography>
            <Typography variant="body1">
              A booking is made with Albion Touring when a) you or
              your agent tells us that you would like to accept our
              written or verbal quotation, and b) you pay us a deposit
              or full payment and c) we issue you with a booking
              confirmation. A binding contract will come into
              existence as soon as we have issued you with a booking
              confirmation that will confirm the details of your
              booking. Upon receipt, if you believe that any details
              on the confirmation (or any other document) are wrong
              you must advise us immediately. The balance of the cost
              of your arrangements (including any applicable
              surcharge) is due not less than 3 months prior to
              scheduled departure for all Albion Touring tours. If we
              do not receive this balance in full and on time, we
              reserve the right to treat your booking as cancelled by
              you in which case the cancellation charges set out below
              are applicable.
            </Typography>
          </Box>
          <Box mb={5}>
            <Typography variant="h4" gutterBottom component="h2">
              Insurance
            </Typography>
            <Typography variant="body1">
              Adequate travel insurance is vital and is a condition of
              the contract. If you choose to travel without adequate
              insurance cover, we will not be liable for any losses
              howsoever arising, in respect of which insurance cover
              would otherwise have been available. We reserve the
              right to request copies of your adequate insurance
              documents prior to the commencement of the tour.
            </Typography>
          </Box>
          <Box mb={5}>
            <Typography variant="h4" gutterBottom component="h2">
              Delays in Journey
            </Typography>
            <Typography variant="body1">
              Albion Touring cannot be held responsible for any delays
              or alterations to the tour itinerary and reserves the
              right to make reasonable alterations to the itinerary
              for reason of unforeseen accidents, roadworks,
              disruptions, and alterations in ferry schedules, border
              crossings, or force majeure situations. Any additional
              expenses incurred by the participants as a result of
              force majeure situations will be the responsibility of
              the participant.
            </Typography>
          </Box>
          <Box mb={5}>
            <Typography variant="h4" gutterBottom component="h2">
              Itinerary Changes
            </Typography>
            <Typography variant="body1">
              The tour leader reserves the right to alter the
              itinerary or route to take into account (by way of
              example and not by way of limitation), weather, supplier
              closure, unforeseen accidents, and roadworks. The
              leader’s decision is final.
            </Typography>
          </Box>
          <Box mb={5}>
            <Typography variant="h4" gutterBottom component="h2">
              Tour Meeting Points
            </Typography>
            <Typography variant="body1">
              The tour leader will outline at the beginning of the
              tour the next meeting point, and the point in which the
              group should meet, and will leave the next meeting
              point. It is the participant’s responsibility to meet at
              the designated point, and be ready for driving at the
              designated start point. Participants who fail to keep up
              with the group are liable for their own expenses
              involved in catching up with the group. Participants
              must arrive at departure points at the times shown on
              their itinerary or ticket.
            </Typography>
          </Box>
          <Box mb={5}>
            <Typography variant="h4" gutterBottom component="h2">
              Risks
            </Typography>
            <Typography variant="body1">
              You must be adequately fit and of an adequate
              proficiency indicated in accordance with the booking
              form to undertake the program set out in the Tour you
              have chosen. Your booking is accepted on the
              understanding that you are aware of the hazards involved
              in your chosen activity. You acknowledge that by the
              very nature of the activities you are exposed to an
              element of personal risk and that the activities are of
              a potentially hazardous and unpredictable nature above
              those associated with conventional holidays. You
              therefore accept and consent to the risks inherent in
              the implementation of this contract and accept as
              reasonable the limitations of the Company’s
              responsibility as set out in these terms and conditions.
            </Typography>
          </Box>
          <Box mb={5}>
            <Typography variant="h4" gutterBottom component="h2">
              Accuracy
            </Typography>
            <Typography variant="body1">
              We endeavour to ensure that all the information and
              prices provided on our advertising literature is
              accurate; however occasionally changes and errors occur
              and we reserve the right to correct prices and other
              details in such circumstances. You must check the
              current price and all other details relating to the
              arrangements that you wish to book before your booking
              is confirmed.
            </Typography>
          </Box>
          <Box mb={8}>
            <Typography variant="h4" gutterBottom component="h2">
              Pricing
            </Typography>
            <Typography variant="body1">
              Our prices are inclusive of all items listed on your
              itinerary. For our Packages, our prices include all
              accommodation, transportation and meals/ additional
              services as advertised. Our prices do not include entry
              to site seeing/ historical sites (unless where stated
              otherwise), visa or border fees, costs of replacing any
              documentation, onward flights or transportation,
              insurance excess, costs of snacks, drinks and other food
              items.
            </Typography>
          </Box>
          <Box mb={5}>
            <Typography variant="h4" gutterBottom component="h2">
              We reserve the right to amend the price of unsold
              products at any time and correct errors in the prices of
              confirmed products.
            </Typography>
            <Typography variant="body1">
              For Packages only:- The price of your confirmed Package
              is subject at all times to changes in transport costs
              such as fuel, changes to cost changes arising from
              government action such as changes in VAT or any other
              government imposed changes; and to changes in currency
              exchange rates and to dues, taxes or fees chargeable for
              services such as embarkation or disembarkation fees at
              ports, any or all of which may result in a variation of
              your Tour price. We will absorb and you will not be
              charged for any increase equivalent to 2% of the price
              of your travel arrangements, any amendment charges
              and/or additional services or travel arrangements. If
              this means that you have to pay an increase of more than
              10% of the price of your confirmed travel arrangements
              (excluding any amendment charges and/or additional
              services or travel arrangements), you will have the
              option of accepting a change to another Tour if we are
              able to offer one (if this is of equivalent or higher
              quality you will not have to pay more but if it is of
              lower quality you will be refunded the difference in
              price), or cancelling and receiving a full refund of all
              monies paid to us. Should you decide to cancel for this
              reason, you must exercise your right to do so within 14
              days from the issue date printed on your final invoice.
              There will be no change made to the price of your
              confirmed holiday within 30 days of your departure nor
              will refunds be paid during this period.
            </Typography>
          </Box>
          <Box mb={5}>
            <Typography variant="h4" gutterBottom component="h2">
              Jurisdiction and applicable law
            </Typography>
            <Typography variant="body1">
              These Booking Conditions and any agreement to which they
              apply are governed in all respects by English law. We
              both agree that any dispute, claim or other matter which
              arises between us out of or in connection with your
              contract or booking will be dealt with by the Courts of
              England and Wales only.
            </Typography>
          </Box>
          <Box mb={5}>
            <Typography variant="h4" gutterBottom component="h2">
              Changes by You
            </Typography>
            <Typography variant="body1" gutterBottom>
              If you wish to change any part of your booking
              arrangements after our confirmation invoice has been
              issued, you must inform us or your agent in writing as
              soon as possible. This should be done by the person who
              made the booking. Whilst we will do our best to assist,
              we cannot guarantee that we will be able to meet your
              requested change. Where we can meet a request, all
              changes will be subject to any applicable rate changes
              or extra costs incurred. If you make the changes more
              than 3 months before your departure, you will have to
              pay an administration fee of £50 for each person whose
              booking has changed, and any further cost we incur in
              making this alteration. You should be aware that these
              costs could increase the closer to the departure date
              that changes are made and you should contact us as soon
              as possible. If you make a change within ten weeks of
              your departure you may have to pay cancellation charges.
              Where a transfer to a person of your choice can be made,
              all costs and charges incurred by us as a result
              together with the appropriate amendment fee must be paid
              before the transfer can be made. Where we are unable to
              assist you and you do not wish to proceed with the
              original booking, we will treat this as a cancellation
              by you and cancellation fees will be payable.
            </Typography>
            <Typography fontWeight="700">
              If you cancel your booking
            </Typography>
            <Typography gutterBottom>
              If you have to, or wish to, cancel your booking, the
              party leader must immediately contact us or your travel
              agent and then confirm your cancellation. The day we
              receive your telephone notification of cancellation is
              the date on which your booking is cancelled. Since we
              incur costs in cancelling your booking, a cancellation
              charge will be levied as shown in the following table.
            </Typography>
            <Box my={2}>
              <Typography fontWeight="700" gutterBottom>
                Cancellation charge table for day trips, shore
                excursions, transfers & taxis
              </Typography>
              <Grid container justifyContent="space-between">
                <Grid item xs={7}>
                  <Typography fontWeight="700">
                    Number of days before start date of your
                    arrangements that notification of cancellation is
                    received by us
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography fontWeight="700">
                    Cancellation Charge
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>More than 72 hours</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>10% of booking value</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>Less than 72 hours</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    100% of total invoice cost including supplements
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>No show</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    100% of total invoice cost including supplements
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Typography>
              Please note that due to strict terms and conditions for
              tickets to Highclere Castle and Warner Bros Studio Tour
              The Making of Harry Potter, and very limited supply of
              tickets, any booking with Highclere Castle or Warner
              Bros Studio Tour entry included is subject to 100%
              cancellation charge from the time the booking has been
              made.
            </Typography>

            <Box my={2}>
              <Typography fontWeight="700" gutterBottom>
                Cancellation charge table for overnight tours
              </Typography>
              <Grid container justifyContent="space-between">
                <Grid item xs={7}>
                  <Typography fontWeight="700">
                    Number of days before start date of your
                    arrangements that notification of cancellation is
                    received by us
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography fontWeight="700">
                    Cancellation Charge
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>More than 28 days</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>20% of booking value</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>27 – 15 days</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    50% of total invoice cost including supplements
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>14 days or less</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    100% of total invoice cost including supplements
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default About;

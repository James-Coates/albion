import { Typography } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import { createMapStyles } from 'helpers';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: grey;
`;

export const TourMap = () => {
  return (
    <Wrapper>
      {/* <GoogleMapReact
        bootstrapURLKeys={{
          key: '',
        }}
        defaultCenter={{ lat: 55, lng: 30 }}
        defaultZoom={7}
        options={{
          styles: createMapStyles('x'),
        }}
      ></GoogleMapReact> */}
      <Typography>test</Typography>
    </Wrapper>
  );
};

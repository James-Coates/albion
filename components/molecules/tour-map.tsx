import { Typography } from '@material-ui/core';
import { ItineraryItem } from '@type/ItineraryItem';
import GoogleMapReact from 'google-map-react';
import { createMapStyles } from 'helpers';
import styled from 'styled-components';
import { Marker } from './marker';

interface TourMapProps {
  itinerary: ItineraryItem[];
}

const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || '';

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: grey;
`;
export const TourMap: React.FC<TourMapProps> = ({ itinerary }) => {
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key,
        }}
        defaultCenter={{ lat: 51.482, lng: -1.17 }}
        defaultZoom={8}
        options={{
          styles: createMapStyles('x'),
        }}
      >
        {itinerary.map((item, i) => (
          <Marker
            key={i}
            lat={item.geoData.lat}
            lng={item.geoData.lng}
            text={String(i + 1)}
            data={item}
          />
        ))}
      </GoogleMapReact>
    </Wrapper>
  );
};

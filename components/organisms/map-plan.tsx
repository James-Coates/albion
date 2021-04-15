import { FC, useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import { Flex, FlexItem, Button } from '../atoms';
import { ExpansionPanel } from '../molecules';
import { createMapStyles } from '../../theme/helpers';
import { Marker } from '../molecules/marker';
import { serializers } from '../../sanity-client.config';
import { PlusCircle } from '@styled-icons/fa-solid/PlusCircle';
import BlockContent from '@sanity/block-content-to-react';
import { Box, Typography } from '@material-ui/core';

const MapPlanWrapper = styled(Flex)``;

const MapWrapper = styled(FlexItem)`
  height: 100vh;
  flex: 0 0 65%;
`;

const PlanWrapper = styled(FlexItem)`
  height: 100vh;
  flex: 0 0 35%;
  background-color: grey;
`;

const Header = ({ subTitleText, children }) => (
  <Flex alignItems="flex-end">
    <FlexItem display="flex" mr={3}>
      <Box color="primary" height={24} width={24} mr={3}>
        <PlusCircle color="primary" />
      </Box>
      <Typography variant="h4">{subTitleText}</Typography>
    </FlexItem>
    <FlexItem>
      <Typography variant="h5">{children}</Typography>
    </FlexItem>
  </Flex>
);

export const MapPlan: FC<MapPlanProps> = ({ mapData, itinerary }) => {
  const [openPanels, setOpenPanels] = useState<any>(initState());

  const mapOptions = (props) => ({
    styles: createMapStyles('x'),
  });

  function onMarkerClick(item) {
    openPanel(item);
  }

  function initState() {
    return itinerary.map((item, i) => ({
      id: i,
      open: false,
    }));
  }

  function openPanel(i) {
    const newOpenPanels = openPanels.slice();

    newOpenPanels[i].open = !openPanels.slice()[i].open;
    setOpenPanels(newOpenPanels);
  }

  return (
    <MapPlanWrapper>
      <MapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyCySbFIsGGZGImXWw3Inr44Zb3ekzRGA4U',
          }}
          defaultCenter={mapData.center}
          defaultZoom={mapData.zoom}
          options={{
            styles: createMapStyles('x'),
          }}
        >
          {itinerary.map((item, i) => (
            <Marker
              key={i}
              lat={item.geoData.lat}
              lng={item.geoData.lng}
              text={i + 1}
              data={item}
              onMarkerClick={() => onMarkerClick(i)}
            />
          ))}
        </GoogleMapReact>
      </MapWrapper>
      <PlanWrapper>
        {itinerary.map((itineraryItem, i) => (
          <ExpansionPanel
            key={i}
            open={openPanels[i].open}
            onToggle={() => openPanel(i)}
            header={
              <Header subTitleText={itineraryItem.startTime}>
                {itineraryItem.title}
              </Header>
            }
          >
            <BlockContent
              blocks={itineraryItem.description}
              serializers={serializers}
            ></BlockContent>
          </ExpansionPanel>
        ))}
      </PlanWrapper>
    </MapPlanWrapper>
  );
};

const GeoDataPropTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

const MapPlanPropTypes = {
  mapData: PropTypes.shape({
    center: PropTypes.shape(GeoDataPropTypes),
    zoom: PropTypes.number.isRequired,
  }),
  itinerary: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startTime: PropTypes.string,
      description: PropTypes.array,
      geoData: PropTypes.shape(GeoDataPropTypes).isRequired,
    }),
  ),
};

MapPlan.defaultProps = {
  mapData: {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  },
  itinerary: [],
};

MapPlan.propTypes = MapPlanPropTypes;

type MapPlanProps = InferProps<typeof MapPlanPropTypes>;

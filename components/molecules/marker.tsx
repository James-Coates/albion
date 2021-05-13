import styled from 'styled-components';
import { MapPin } from '@styled-icons/remix-fill/MapPin';
import { Box, Tooltip, Typography } from '@material-ui/core';
import { FC } from 'react';

interface MarkerProps {
  data: {
    title: string;
  };
  text: string;
  lat?: number;
  lng?: number;
  onMarkerClick?: any;
}

const Wrapper = styled(Box)`
  cursor: pointer;
`;

const TextBox = styled(Box)`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  height: 18px;
  width: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Marker: FC<MarkerProps> = ({
  data,
  text,
  onMarkerClick,
}) => (
  <Tooltip title={data.title}>
    <Wrapper
      position="relative"
      color="secondary.main"
      height={40}
      width={40}
      onClick={onMarkerClick ? () => onMarkerClick(data) : undefined}
    >
      <MapPin height="100%" />
      <TextBox bgcolor="secondary.main">
        <Typography
          variant="body2"
          component="span"
          color="textSecondary"
        >
          {text}
        </Typography>
      </TextBox>
    </Wrapper>
  </Tooltip>
);

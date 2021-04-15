import { BlockContentProps } from '@sanity/block-content-to-react';
import { GeoData } from './geo-data.model';

export interface ItineraryItem {
  title: string;
  startTime: string;
  description: BlockContentProps;
  geoData?: GeoData;
}

import { BlockContentProps } from '@sanity/block-content-to-react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { GeoData } from './geo-data';

export interface ItineraryItem {
  title: string;
  locationName: string;
  startTime: string;
  summary: BlockContentProps;
  geoData: GeoData;
  image?: SanityImageSource;
}

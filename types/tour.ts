import { BlockContentProps } from '@sanity/block-content-to-react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { InclusionsData } from './inclusions';
import { ItineraryItem } from './ItineraryItem';

export interface Tour {
  _id: string;
  slug: string;
  title: string;
  summary: BlockContentProps;
  mainImage: SanityImageSource;
  price: number;
  destinations: string;
  // availability: string;
  // slides?: Slide[];
  // mapData?: MapData;
  itinerary?: ItineraryItem[];
  inclusionsData: InclusionsData;
}

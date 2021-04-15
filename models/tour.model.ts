import { BlockContentProps } from '@sanity/block-content-to-react';
import { ItineraryItem, Slide, InclusionsData, MapData } from '.';

export interface Tour {
  id: string;
  slug: string;
  title: string;
  summary: BlockContentProps;
  image: any;
  price: number;
  availability: string;
  slides?: Slide[];
  mapData?: MapData;
  itinerary?: ItineraryItem[];
  inclusions?: InclusionsData;
}

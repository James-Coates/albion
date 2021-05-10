import { BlockContentProps } from '@sanity/block-content-to-react';

export interface Feature {
  image: any;
  heading: string;
  context: string;
  summary: BlockContentProps;
}

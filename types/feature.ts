import { BlockContentProps } from '@sanity/block-content-to-react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Feature {
  image: SanityImageSource;
  heading: string;
  context: string;
  summary: BlockContentProps;
}

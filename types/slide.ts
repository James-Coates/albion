import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Slide {
  title: string;
  description: string[];
  image: SanityImageSource;
}

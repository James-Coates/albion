import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface CustomImage {
  image: SanityImageSource;
  title: string;
  type: 'wide' | 'narrow';
}

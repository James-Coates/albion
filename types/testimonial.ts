import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Testimonial {
  content: string;
  owner: string;
  source: string;
  image: SanityImageSource;
}

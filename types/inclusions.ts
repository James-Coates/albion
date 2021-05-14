import { BlockContentProps } from '@sanity/block-content-to-react';

export interface Inclusions {
  intro: BlockContentProps[];
  inclusions: string[];
  exclusions: string[];
}

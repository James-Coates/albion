import { BlockContentProps } from '@sanity/block-content-to-react';

export interface InclusionsData {
  intro: BlockContentProps[];
  inclusions: string[];
  exclusions: string[];
}

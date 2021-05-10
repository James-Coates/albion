import SanityBlockContent, {
  BlockContentProps as SanityBlockContentProps,
} from '@sanity/block-content-to-react';
import React from 'react';
import { serializers as defaultSerializers } from '../../sanity-client.config';

export type BlockContentProps = SanityBlockContentProps;

export const BlockContent: React.FC<BlockContentProps> = ({
  serializers,
  ...rest
}) => {
  const s = !serializers ? defaultSerializers : serializers;
  return <SanityBlockContent serializers={s} {...rest} />;
};

import { string } from 'prop-types';
import { FaCertificate } from 'react-icons/fa';

export default {
  name: 'feature',
  title: 'Features',
  type: 'document',
  icon: FaCertificate,
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'context',
      type: 'string',
      title: 'Context Heading',
      description: 'No more than 3 or 4 word label of this feature',
    },
    {
      name: 'summary',
      type: 'simplePortableText',
      title: 'Feature Summary',
      description: 'A short summary of this feature',
    },
    {
      name: 'image',
      title: 'Feature Image',
      type: 'image',
      description: 'The image to show with the feature',
      options: {
        hotspot: true,
      },
    },
  ],
};

import { GiTrail } from 'react-icons/gi';

export default {
  name: 'tour',
  title: 'Tours',
  type: 'document',
  icon: GiTrail,
  fields: [
    {
      title: 'Slug',
      description: 'Url parameter for this tour.',
      name: 'slug',
      type: 'slug',
      readOnly: true,
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      readOnly: true,
    },
    {
      title: 'Destination Summary',
      name: 'destinations',
      type: 'string',
      description:
        'List main trip destinations, e.g. The Cotswalds, Oxford & Stratford upon Avon',
    },
    {
      title: 'Trip Summary',
      name: 'summary',
      type: 'simplePortableText',
      description: 'A short summary of the tour.',
    },
    {
      title: 'Main image',
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      description: 'Enter price in GBP',
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'object',
      fields: [
        {
          name: 'images',
          title: 'Photos',
          description:
            'Add images to be shown in the page carousel below the top section.',
          type: 'array',
          of: [{ type: 'customImage' }],
        },
      ],
    },
    {
      title: 'Map Data',
      name: 'mapData',
      type: 'mapData',
    },
    {
      title: 'Itinerary',
      name: 'itinerary',
      type: 'array',
      of: [{ type: 'itineraryItem' }],
    },
    {
      title: 'Inclusions Section',
      name: 'inclusionsData',
      type: 'object',
      fields: [
        {
          title: 'Intro Copy',
          name: 'intro',
          type: 'simplePortableText',
        },
        {
          title: 'Inclusions',
          name: 'inclusions',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          title: 'Exclusions',
          name: 'exclusions',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
  ],
};

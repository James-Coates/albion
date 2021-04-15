export default {
  title: 'Itinerary',
  name: 'itinerary',
  type: 'array',
  of: [
    {
      name: 'Itnerary Item',
      title: 'itneraryItem',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Start Time',
          name: 'startTime',
          type: 'string',
          description: 'E.g. 9:00am',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'simplePortableText',
        },
        {
          title: 'Location',
          name: 'location',
          type: 'geopoint',
        },
      ],
    },
  ],
};

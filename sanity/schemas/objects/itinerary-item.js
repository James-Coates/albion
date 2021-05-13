export default {
  name: 'itineraryItem',
  title: 'Itinerary Item',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      title: 'Start Time',
      name: 'startTime',
      type: 'string',
      description: 'E.g. 9:00am',
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'simplePortableText',
    },
    {
      name: 'locationName',
      title: 'Location Name',
      type: 'string',
      description:
        'Short description of location E.g. London Heathrow',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Relevant image',
    },
    {
      title: 'Location',
      name: 'geoData',
      type: 'geopoint',
      description: 'Drop a pin of the location on the following map',
      validation: (rule) => rule.required(),
    },
  ],
};

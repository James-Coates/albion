export default {
  name: 'slides',
  title: 'Slides',
  type: 'array',
  of: [
    {
      name: 'slide',
      title: 'Slide',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          title: 'image',
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

export default {
  name: 'customImage',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Wide', value: 'wide', description: '6/4 Ratio' },
          {
            title: 'Narrow',
            value: 'narrow',
            description: '4/6 Ratio',
          },
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
  ],
};

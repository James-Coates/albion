export default {
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
};

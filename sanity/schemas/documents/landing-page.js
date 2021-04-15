export default {
  name: 'landingPage',
  type: 'document',
  title: 'Landing Page',
  __experimental_actions: ['update', 'create', 'publish'],
  initialValue: {
    title: 'Landing Page',
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'mainHeading',
      type: 'string',
      title: 'Main Heading',
    },
    {
      name: 'mainCopy',
      type: 'simplePortableText',
      title: 'Home Page Summary Text',
      description: 'A summary or short piece of text shown below the main heading (Not Required).',
    },
    {
      name: 'featureList',
      type: 'array',
      title: 'Feature List',
      of: [{ type: 'reference', to: [{ type: 'feature' }] }],
    },

    // {
    //   type: 'color',
    //   name: 'primaryColor',
    //   title: 'Primary brand color',
    //   description:
    //     'Used to generate the primary accent color for websites, press materials, etc',
    // },
    // {
    //   type: 'color',
    //   name: 'secondaryColor',
    //   title: 'Secondary brand color',
    //   description:
    //     'Used to generate the secondary accent color for websites, press materials, etc',
    // },
  ],
};

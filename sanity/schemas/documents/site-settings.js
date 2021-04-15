export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    'update',
    /* 'create', 'delete', */ 'publish',
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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

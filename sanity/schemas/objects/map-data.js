export default {
  title: 'Map Data',
  name: 'mapData',
  type: 'object',
  fields: [
    {
      title: 'Center',
      name: 'center',
      type: 'geopoint',
    },
    {
      title: 'Zoom Level',
      name: 'zoom',
      type: 'number',
    },
  ],
};

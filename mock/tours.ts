import { Tour } from '../models/tour.model';

export const tours: Tour[] = [
  {
    id: 'great-british-day-out',
    title: 'The Great British Day Out',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati mollitia modi repellat neque deleniti officiis perspiciatis ipsum ex at.',
    image:
      'https://images.unsplash.com/photo-1519526933243-dd9747bfaae5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3734&q=80',
    price: 89,
    availability: 'Available every Wed',
    slides: [
      {
        title: 'Lorem Ipsum',
        description: ['Loremipsum'],
        image: {
          title: 'image',
          url:
            'https://images.unsplash.com/photo-1433883669848-fa8a7ce070b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80',
        },
      },
      {
        title: 'Lorem Ipsum',
        description: ['Lorem ipsum '],
        image: {
          title: 'image',
          url:
            'https://images.unsplash.com/photo-1433883669848-fa8a7ce070b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80',
        },
      },
    ],
    itinerary: {
      mapData: {
        center: {
          lat: 51.317226,
          lng: -1.554736,
        },
        zoom: 8,
      },
      items: [
        {
          title: 'Start',
          description: 'Pickup point',
          geoData: {
            lat: 51.4588,
            lng: -0.5048,
          },
        },
        {
          title: 'Stop 1',
          description: 'Lorem ipsum',
          geoData: {
            lat: 51.4122,
            lng: -1.2391,
          },
        },
        {
          title: 'Stop 2',
          description: 'Lorem ipsum',
          geoData: {
            lat: 51.1994,
            lng: -1.5274,
          },
        },
      ],
    },
    inclusions: {
      copy:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati mollitia modi repellat neque deleniti officiis perspiciatis ipsum ex at.',
      inclusions: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae porro eum vitae facilis soluta asperiores.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae porro eum vitae facilis soluta asperiores.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae porro eum vitae facilis soluta asperiores.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae porro eum vitae facilis soluta asperiores.',
      ],
      exclusions: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae porro eum vitae facilis soluta asperiores.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae porro eum vitae facilis soluta asperiores.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae porro eum vitae facilis soluta asperiores.',
      ],
    },
  },
  {
    id: 'stratford',
    title: 'Stratford Tour',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati mollitia modi repellat neque deleniti officiis perspiciatis ipsum ex at.',
    image: '/images/sua.jpg',
    price: 109,
    availability: 'Available every Mon and Fri',
    slides: [
      {
        title: 'Lorem Ipsum',
        description: ['Loremipsum'],
        image: {
          title: 'image',
          url:
            'https://images.unsplash.com/photo-1433883669848-fa8a7ce070b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80',
        },
      },
      {
        title: 'Lorem Ipsum',
        description: ['Lorem ipsum '],
        image: {
          title: 'image',
          url:
            'https://images.unsplash.com/photo-1433883669848-fa8a7ce070b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80',
        },
      },
    ],
  },
  {
    id: 'london',
    title: 'The London Tour',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati mollitia modi repellat neque deleniti officiis perspiciatis ipsum ex at.',
    image:
      'https://media.holidayme.com/wp-content/uploads/2017/02/13185557/shutterstock_178245392.jpg',
    price: 109,
    availability: 'Available every Mon and Fri',
    slides: [
      {
        title: 'Lorem Ipsum',
        description: ['Loremipsum'],
        image: {
          title: 'image',
          url:
            'https://images.unsplash.com/photo-1433883669848-fa8a7ce070b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80',
        },
      },
      {
        title: 'Lorem Ipsum',
        description: ['Lorem ipsum '],
        image: {
          title: 'image',
          url:
            'https://images.unsplash.com/photo-1433883669848-fa8a7ce070b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80',
        },
      },
    ],
  },
  {
    id: 'cambridge',
    title: 'A day in Cambridge',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati mollitia modi repellat neque deleniti officiis perspiciatis ipsum ex at.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/b4/KingsCollegeChapelWest.jpg',
    price: 109,
    availability: 'Available every Mon and Fri',
    slides: [
      {
        title: 'Lorem Ipsum',
        description: ['Loremipsum'],
        image: {
          title: 'image',
          url:
            'https://images.unsplash.com/photo-1433883669848-fa8a7ce070b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80',
        },
      },
      {
        title: 'Lorem Ipsum',
        description: ['Lorem ipsum '],
        image: {
          title: 'image',
          url:
            'https://images.unsplash.com/photo-1433883669848-fa8a7ce070b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80',
        },
      },
    ],
  },
];

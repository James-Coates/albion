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
  },
  {
    id: 'stratford',
    title: 'Stratford Tour',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati mollitia modi repellat neque deleniti officiis perspiciatis ipsum ex at.',
    image: '/images/sua.jpg',
    price: 109,
    availability: 'Available every Mon and Fri',
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
  },
];

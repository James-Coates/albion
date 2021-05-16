import { string } from 'prop-types';
import { FaCommentDots } from 'react-icons/fa';

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: FaCommentDots,
  fields: [
    {
      name: 'content',
      type: 'text',
      title: 'Review',
    },
    {
      name: 'owner',
      type: 'string',
      title: 'Reviewer Name',
    },
    {
      name: 'source',
      type: 'string',
      title: 'Source of Review',
      description: 'E.g. A Tripadvisor Review',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Background Image',
      description:
        'E.g. This will be a background image behind the review text. I recommend adding an image realed to the tour or a generic picturesque landscape.',
    },
    {
      name: 'relatedTour',
      title: 'Related Tour',
      type: 'reference',
      description: 'E.g. A Tripadvisor Review',
      to: [{ type: 'tour' }],
    },
  ],
};

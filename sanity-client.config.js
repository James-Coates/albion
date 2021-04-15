import { Typography } from '@material-ui/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const options = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: 'develop',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === 'production',
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
};

const client = sanityClient(options);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export const serializers = {
  types: {
    block: (props) => <Typography>{props.children}</Typography>,
  },
};

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export default client;

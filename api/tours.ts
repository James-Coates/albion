import { Tour } from '@type/tour';
import client from 'sanity-client.config';

const tourPostFields: string = `
  _id,
  "slug": slug.current,
  name,
  title,
  price,
  destinations,
  mainImage,
  summary,
  gallery,
  itinerary,
  inclusionsData
`;

export async function getAllTours(): Promise<Tour[]> {
  const query: string =
    '*[_type == "tour"] | order(date desc, _updatedAt desc)';

  const tours: Tour[] | undefined = await client.fetch(
    `${query}{${tourPostFields}}`,
  );
  return tours || [];
}

export async function getTourFromSlug(
  slug: string,
): Promise<Tour | null> {
  const query: string = '*[_type == "tour" && slug.current == $slug]';
  const tour: Tour | undefined = await client.fetch(
    `${query} {${tourPostFields}}[0]`,
    {
      slug,
    },
  );

  return tour ? tour : null;
}

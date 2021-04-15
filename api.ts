import { Tour } from '@type/tour';
import client, { urlFor } from './sanity-client.config';

const postFields = `
_id,
slug,
name,
title,
price,
'image': mainImage,
description,
`;

export async function getLandingData() {
  if (process.env.MOCK) {
    console.log('is mock');
    return [];
  }

  const postFields = `
    mainHeading,
    mainCopy,
    "featureList": featureList[]->{
      heading,
      summary,
      context,
      image,
    },
  `;

  const query = '*[_type == "landingPage"]';

  const data = await client.fetch(`${query}{${postFields}}`);
  return data[0];
}

export async function getAllTours() {
  if (process.env.MOCK) {
    console.log('is mock');
    return [];
  }

  const query =
    '*[_type == "tour"] | order(date desc, _updatedAt desc)';

  const data = await client.fetch(`${query}{${postFields}}`);
  const ret = data.map((tour) => {
    tour.slug = tour.slug.current;
    return tour;
  });
  return ret;
}

export async function getTour(slug): Promise<Tour | null> {
  if (process.env.MOCK) {
    console.log('is mock');
    return null;
  }
  const query = '*[_type == "tour" && slug.current == $slug]';
  const postFields = `
  _id,
  slug,
  name,
  title,
  price,
  destinations,
  mainImage,
  summary,
  slides,
  mapData,
  itinerary,
  inclusionsData
  `;

  const data = await client.fetch(`${query} {${postFields}}[0]`, {
    slug,
  });

  // const image = urlFor(data.image).url();

  // const slides = data.slides
  //   ? data.slides.map((slide) => {
  //       slide.image.url = urlFor(slide.image).url();
  //       slide.image.title = slide.title;
  //       return slide;
  //     })
  //   : [];

  // const itinerary: ItineraryItem[] = data.itinerary.map(
  //   (itineraryItem) => ({
  //     title: itineraryItem.title,
  //     description: itineraryItem.description,
  //     startTime: itineraryItem.startTime,
  //     geoData: {
  //       lat: itineraryItem.location.lat,
  //       lng: itineraryItem.location.lng,
  //     },
  //   }),
  // );

  const tour: Tour = {
    id: data._id,
    slug: data.slug,
    title: data.title,
    summary: data.summary || null,
    mainImage: data.mainImage,
    price: data.price,
    destinations: data.destinations,
    // availability: 'string',
    // slides,
    // mapData: data.mapData ? data.mapData : null,
    // itinerary,
    // inclusions: data.inclusionsData,
  };

  return tour;
}

import client from '../sanity-client.config';

export async function getLandingData() {
  if (process.env.MOCK) {
    console.log('is mock');
    return [];
  }

  const postFields = `
    mainHeading,
    mainCopy,
    featuredToursIntro,
    "featuredTours": featuredTours[]->{
      _id,
      "slug": slug.current,
      name,
      title,
      price,
      destinations,
      mainImage,
      summary,
    },
    featureListIntro,
    "featureList": featureList[]->{
      heading,
      summary,
      context,
      image,
    },
    "testimonials": testimonials[]->{
      content,
      owner,
      source,
      image
    }
  `;

  const query = '*[_type == "landingPage"]';

  const data = await client.fetch(`${query}{${postFields}}`);
  return data[0];
}

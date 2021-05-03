import client from '../sanity-client.config';

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

import client from '../sanity-client.config';

export async function getToursPageData() {
  if (process.env.MOCK) {
    console.log('is mock');
    return [];
  }

  const postFields = `
    intro,
  `;

  const query = '*[_type == "tourPage"]';

  const data = await client.fetch(`${query}{${postFields}}`);
  console.log(data);
  return data[0];
}

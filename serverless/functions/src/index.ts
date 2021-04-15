import * as functions from 'firebase-functions';
import axios, {AxiosResponse} from 'axios';
import {SanityTour} from './@types/sanity-tour';
import {CheckfrontItem} from './@types/checkfront-item';

export const sanityCheckfrontSync = functions.https.onRequest(
    (request, response) => {
      const sanityHeaders = {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + functions.config().sanity.token,
      };
      const sanityUrl: string = functions.config().sanity.url;
      const sanityDataset: 'develop' | 'production' = 'develop';

      const item: CheckfrontItem = request.body.item;

      functions.logger.info('Hello logs!', {structuredData: true});
      response.send('Hello from Firebase!');

      const sanityTour: SanityTour = transformTour(item);

      let postMethod;

      if (request.body.action === 'insert') {
        postMethod = createSanityTour;
      }
      if (request.body.action === 'update' && item.status !== 'DELETED') {
        postMethod = patchSanityTour;
      }
      if (request.body.action === 'update' && item.status === 'DELETED') {
        postMethod = deleteSanityTour;
      }

      if (postMethod) {
        postMethod(sanityTour)
            .then((res) => {
              console.log(res);
              return res;
            })
            .catch((err) => {
              console.error(err);
            });
      }

      /**
       * Adds two numbers together.
       * @param {object} item The first number.
       * @return {object} The sum of the two numbers.
       */
      function transformTour(item: CheckfrontItem): SanityTour {
        return {
          _id: String(item.item_id),
          title: item.name,
          slug: {
            _type: 'slug',
            current: item.sku
                .toLowerCase()
                .replace(/\s+/g, '-')
                .slice(0, 200),
          },
        };
      }

      /**
       * Adds two numbers together.
       * @param {object} tour The first number.
       * @return {object} The sum of the two numbers.
       */
      async function createSanityTour(
          tour: SanityTour,
      ): Promise<AxiosResponse<string>> {
        return axios.post(
            `${sanityUrl}${sanityDataset}`,
            {
              mutations: [
                {
                  create: {
                    _type: 'tour',
                    ...tour,
                  },
                },
              ],
            },
            {
              headers: sanityHeaders,
            },
        );
      }

      /**
       * Adds two numbers together.
       * @param {object} tour The first number.
       * @return {object} The sum of the two numbers.
       */
      async function patchSanityTour(
          tour: SanityTour,
      ): Promise<AxiosResponse<string>> {
        return axios.post(
            `${sanityUrl}${sanityDataset}`,
            {
              mutations: [
                {
                  patch: {
                    id: tour._id,
                    set: tour,
                  },
                },
              ],
            },
            {
              headers: sanityHeaders,
            },
        );
      }

      /**
       * Adds two numbers together.
       * @param {object} tour The tour id.
       * @return {object} The sum of the two numbers.
       */
      async function deleteSanityTour(
          tour: SanityTour,
      ): Promise<AxiosResponse<string>> {
        return axios.post(
            `${sanityUrl}${sanityDataset}`,
            {
              mutations: [
                {
                  delete: {
                    id: tour._id,
                  },
                },
              ],
            },
            {
              headers: sanityHeaders,
            },
        );
      }
    },
);

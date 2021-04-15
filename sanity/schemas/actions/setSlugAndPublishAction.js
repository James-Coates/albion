import { useState, useEffect } from 'react';
import { useDocumentOperation } from '@sanity/react-hooks';
import sanityClient from '@sanity/client';

const sanityClientConfig = {
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  token: process.env.SANITY_STUDIO_API_TOKEN,
  useCdn: true,
};

export default function SetSlugAndPublishAction(props) {
  const { patch, publish } = useDocumentOperation(
    props.id,
    props.type,
  );
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false);
    }
  }, [props.draft]);

  return {
    disabled: publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish',
    onHandle: async () => {
      // This will update the button text
      setIsPublishing(true);

      /// Get the sanity client for fetching referenced field values
      // const client = sanityClient(sanityClientConfig);

      /// Set the initial slug value to the name field
      let slug = props.draft.name;

      /// Set the slug based on the document type
      switch (props.type) {
        case 'tour':
          /// The type of the reference field to get the value from
          // const referenceNameType = 'category';
          // /// Query for the referenced "category" and return the "name" field of that referenced document
          // const query = `*[_type == "${referenceNameType}" && _id == $nameRef][0] {name}`;
          // /// Start with the "category: reference id in the draft
          // let referenceName = props.draft.category._ref;
          // /// Fetch the category referenced in this document
          // await client
          //   .fetch(query, { nameRef: referenceName })
          //   .then((category) => {
          //     /// Set the referenceName to the category.name field
          //     referenceName = !!category
          //       ? category.name
          //       : referenceName;
          //   });

          /// For the "tag" type document, set the slug to [category.name]-[type]-[number]
          slug = props.draft.title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200);

          /// Set name field for the "tag" type document to be the same value as the slug
          break;

        default:
          /// Doing nothing? Consider deleting this switch statement to simplify your code.
          break;
      }

      /// Set the slug field of this document
      patch.execute([
        {
          set: {
            slug: { _type: 'slug', current: slug.toLowerCase() },
          },
        },
      ]);

      // Perform the publish
      publish.execute();

      // Signal that the action is completed
      props.onComplete();
    },
  };
}

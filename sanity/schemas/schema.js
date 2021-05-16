// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import tour from './documents/tour';
import simplePortableText from './objects/simple-portable-text';
import internalLink from './objects/internal-link';
import link from './objects/link';
import slides from './objects/slides';
import mapData from './objects/map-data';
import siteSettings from './documents/site-settings';
import landingPage from './documents/landing-page';
import feature from './documents/feature';
import itineraryItem from './objects/itinerary-item';
import customImage from './objects/custom-image';
import testimonial from './documents/testimonial';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    siteSettings,
    landingPage,
    tour,
    feature,
    // objects
    link,
    slides,
    testimonial,
    itineraryItem,
    mapData,
    // internalLink,
    simplePortableText,
    customImage,
  ]),
});

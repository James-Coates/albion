import S from '@sanity/desk-tool/structure-builder';
import { FaHome, FaCog } from 'react-icons/fa';

const hiddenDocTypes = (listItem) =>
  !['siteSettings', 'landingPage'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(FaCog)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),
      S.listItem()
        .title('Landing Page')
        .icon(FaHome)
        .child(
          S.document()
            .schemaType('landingPage')
            .documentId('landingPage'),
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);

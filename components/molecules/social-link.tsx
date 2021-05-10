import { FC } from 'react';
import PropTypes from 'prop-types';

import { Instagram } from '@styled-icons/fa-brands/Instagram';
import { Twitter } from '@styled-icons/fa-brands/Twitter';
import { Tripadvisor } from '@styled-icons/fa-brands/Tripadvisor';
import { Facebook } from '@styled-icons/fa-brands/Facebook';

import { InferPropTypes } from '../../lib/react/infer-proptypes';

import { HoverColorLink } from '@components/animations/hover-color-link';

export const supportedSocial = [
  'instagram',
  'facebook',
  'twitter',
  'tripadvisor',
];

const getSocialLink = (name: string): JSX.Element | null => {
  switch (name) {
    case 'instagram':
      return <Instagram height="20" />;
    case 'twitter':
      return <Twitter height="20" />;
    case 'tripadvisor':
      return <Tripadvisor height="20" />;
    case 'facebook':
      return <Facebook height="20" />;
    default:
      return null;
  }
};

const socialLinkPropTypes = {
  name: PropTypes.oneOf(supportedSocial).isRequired,
  link: PropTypes.string.isRequired,
};

export const SocialLink: FC<SocialLinkProps> = ({ name, link }) => {
  return (
    <HoverColorLink href={link} target="blank">
      {getSocialLink(name)}
    </HoverColorLink>
  );
};

SocialLink.propTypes = socialLinkPropTypes;

type SocialLinkProps = InferPropTypes<typeof socialLinkPropTypes>;

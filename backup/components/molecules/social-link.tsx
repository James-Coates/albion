import { FC } from 'react';
import PropTypes from 'prop-types';
import { Instagram } from '@styled-icons/fa-brands/Instagram';
import { Twitter } from '@styled-icons/fa-brands/Twitter';
import { Tripadvisor } from '@styled-icons/fa-brands/Tripadvisor';
import { Facebook } from '@styled-icons/fa-brands/Facebook';
import { InferPropTypes } from '../../lib/react/infer-proptypes';
import styled from 'styled-components';

export const supportedSocial = [
  'instagram',
  'facebook',
  'twitter',
  'tripadvisor',
];

const getSocialLink = (name: string): JSX.Element | null => {
  switch (name) {
    case 'instagram':
      return <Instagram height="18" />;
    case 'twitter':
      return <Twitter height="18" />;
    case 'tripadvisor':
      return <Tripadvisor height="18" />;
    case 'facebook':
      return <Facebook height="18" />;
    default:
      return null;
  }
};

const LinkWrapper = styled.a`
  transition: 300ms;
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const socialLinkPropTypes = {
  name: PropTypes.oneOf(supportedSocial).isRequired,
  link: PropTypes.string.isRequired,
};

export const SocialLink: FC<SocialLinkProps> = ({ name, link }) => (
  <LinkWrapper href={link} target="blank">
    {getSocialLink(name)}
  </LinkWrapper>
);

SocialLink.propTypes = socialLinkPropTypes;

type SocialLinkProps = InferPropTypes<typeof socialLinkPropTypes>;

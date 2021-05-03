import { FC } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import {
  SocialLink,
  supportedSocial,
} from '../molecules/social-link';

const links = [
  {
    name: 'instagram',
    link: 'http://google.com',
  },
  {
    name: 'twitter',
    link: 'http://google.com',
  },
  {
    name: 'tripadvisor',
    link: 'http://google.com',
  },
];

export const SocialLinks: FC<any> = () => (
  <div>
    <Grid container spacing={3}>
      {links.map((item, i) =>
        supportedSocial.includes(item.name) ? (
          <Grid item key={i}>
            <SocialLink name={item.name} link={item.link} />
          </Grid>
        ) : null,
      )}
    </Grid>
  </div>
);

SocialLinks.propTypes = {
  social: PropTypes.arrayOf(PropTypes.shape({})),
};

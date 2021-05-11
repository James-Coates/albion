import React from 'react';
import { Layout } from '@components/layouts';
import { Box, Typography } from '@material-ui/core';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Box bgcolor="primary.main" py={12}>
        <Typography variant="h1">Contact</Typography>
        <Typography variant="subtitle1">Coming Soon...</Typography>
      </Box>
    </Layout>
  );
};

export default Contact;

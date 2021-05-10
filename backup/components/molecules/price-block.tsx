import { FC } from 'react';
import { Box, Typography } from '@material-ui/core';

interface PriceBlockProps {
  price: number;
}

export const PriceBlock: FC<PriceBlockProps> = ({ price }) => {
  return (
    <Box>
      <Typography variant="body2">From</Typography>
      <Typography variant="h5" component="span">
        £{price}
      </Typography>
      <Typography variant="body2" component="span">
        p/p
      </Typography>
    </Box>
  );
};

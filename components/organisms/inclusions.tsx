import { FC } from 'react';
import { InclusionsData } from '../../types';
import { Check2Circle, XCircle } from '@styled-icons/bootstrap/';
import BlockContent from '@sanity/block-content-to-react';
import { serializers } from '../../sanity-client.config';
import { Box, Container, Grid, Typography } from '@material-ui/core';

interface InclusionItem {
  included: any;
  text: string;
}

export const InclusionItem: FC<InclusionItem> = ({
  included,
  text,
}) => (
  <Box display="flex" mb={4}>
    <Box
      flex="0 0 40px"
      color={included ? 'success.main' : 'error.main'}
      mr={3}
    >
      {included ? (
        <Check2Circle width={32} />
      ) : (
        <XCircle width={32} />
      )}
    </Box>
    <Box flex="1">
      <Typography>{text}</Typography>
    </Box>
  </Box>
);

interface InclusionsProps {
  data: InclusionsData;
}

export const Inclusions: FC<InclusionsProps> = ({ data }) => {
  return (
    <Box>
      <Container>
        <Box maxWidth={720}>
          <Typography variant="h2" gutterBottom>
            What’s included?
          </Typography>
          {data.intro ? (
            <BlockContent
              blocks={data.intro}
              serializers={serializers}
            />
          ) : null}
        </Box>
        <Grid container>
          <Grid item>
            {data.inclusions.map((inclusion, i) => (
              <InclusionItem key={i} included text={inclusion} />
            ))}
          </Grid>
          <Grid item>
            {data.exclusions.map((exclusion, i) => (
              <InclusionItem
                key={i}
                included={false}
                text={exclusion}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

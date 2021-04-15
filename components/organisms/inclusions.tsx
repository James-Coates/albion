import { FC } from 'react';
import {
  Flex,
  FlexItem,
  Heading,
  Text,
} from '../../components/atoms';
import { Block, Container } from '../../components/molecules';
import { InclusionsData } from '../../models';
import { Check2Circle, XCircle } from '@styled-icons/bootstrap/';
import BlockContent from '@sanity/block-content-to-react';
import { serializers } from '../../sanity-client.config';
import { Box, Typography } from '@material-ui/core';

export const InclusionItem = ({ included, text }) => (
  <Flex mb={4}>
    <FlexItem
      flex="0 0 40px"
      color={included ? 'success.main' : 'error.main'}
      mr={3}
    >
      {included ? (
        <Check2Circle width={32} />
      ) : (
        <XCircle width={32} />
      )}
    </FlexItem>
    <FlexItem flex="1">
      <Typography>{text}</Typography>
    </FlexItem>
  </Flex>
);

interface InclusionsProps {
  data: InclusionsData;
}

export const Inclusions: FC<InclusionsProps> = ({ data }) => {
  return (
    <Block>
      <Container>
        <Box maxWidth={720}>
          <Typography variant="h2" gutterBottom>
            What’s included?
          </Typography>
          <BlockContent
            blocks={data.intro}
            serializers={serializers}
          />
        </Box>
        <Flex justifyContent="space-between" flexWrap="wrap" my={5}>
          <FlexItem flexBasis={'40%'} ml={5}>
            {data.inclusions.map((inclusion, i) => (
              <InclusionItem key={i} included text={inclusion} />
            ))}
          </FlexItem>
          <FlexItem flexBasis={'40%'}>
            {data.exclusions.map((exclusion, i) => (
              <InclusionItem
                key={i}
                included={false}
                text={exclusion}
              />
            ))}
          </FlexItem>
        </Flex>
      </Container>
    </Block>
  );
};

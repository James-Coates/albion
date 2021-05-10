import { SplitContent } from '@components/molecules/split-content';
import { isOdd } from '@lib/math';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import BlockContent, {
  BlockContentProps,
} from '@sanity/block-content-to-react';
import { FC } from 'react';
import { serializers, urlFor } from 'sanity-client.config';
import { Fade } from 'react-reveal';
import { Section } from '@components/atoms';
import {
  Staggered,
  StaggeredLeft,
  StaggeredRight,
} from '@components/molecules/staggered';
import { VideoBlock } from './video-block';

interface AboutSectionProps {
  features: {
    heading: string;
    context: string;
    summary: BlockContentProps;
    image: string;
  }[];
}

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 55%;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

export const AboutSection: FC<AboutSectionProps> = ({ features }) => {
  return (
    <Section mb={0}>
      <Box>
        <Container maxWidth="lg">
          <Staggered justify="space-around">
            <StaggeredLeft>
              <Typography variant="h2" color="primary" gutterBottom>
                About our tours
              </Typography>
            </StaggeredLeft>
            <StaggeredRight>
              <BlockContent
                blocks={features[0].summary}
                serializers={serializers}
              />
            </StaggeredRight>
          </Staggered>
        </Container>
      </Box>
      {features.map((feature, i) => (
        <Box my="14vw" key={i}>
          <Fade bottom>
            <SplitContent
              image={urlFor(feature.image).url()}
              reverse={isOdd(i)}
            >
              <Typography
                variant="body2"
                gutterBottom
                color="primary"
              >
                {feature.context}
              </Typography>
              <Typography variant="h3" gutterBottom color="primary">
                {feature.heading}
              </Typography>
              <BlockContent
                blocks={feature.summary}
                serializers={serializers}
              />
            </SplitContent>
          </Fade>
        </Box>
      ))}
      <VideoBlock youtubeId="68XZgPMLp50">
        <Staggered justify="space-around">
          <StaggeredLeft>
            <Typography
              component="h2"
              variant="h3"
              color="primary"
              gutterBottom
            >
              A little taster of one of our tours...
            </Typography>
          </StaggeredLeft>
          <StaggeredRight>
            <BlockContent
              blocks={features[0].summary}
              serializers={serializers}
            />
          </StaggeredRight>
        </Staggered>
      </VideoBlock>
    </Section>
  );
};

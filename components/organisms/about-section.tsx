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

const fakeData = [
  {
    heading: 'Lorem Ipsum',
    image: 'https://source.unsplash.com/random',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea tempore delectus nobis quibusdam accusantium expedita sit aperiam explicabo in assumenda!',
  },
  {
    heading: 'Lorem Ipsum',
    image: 'https://source.unsplash.com/random',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea tempore delectus nobis quibusdam accusantium expedita sit aperiam explicabo in assumenda!',
  },
  {
    heading: 'Lorem Ipsum',
    image: 'https://source.unsplash.com/random',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea tempore delectus nobis quibusdam accusantium expedita sit aperiam explicabo in assumenda!',
  },
];

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
    <Box mt={50}>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" color="primary">
                What makes our tours special
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mt={10}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nulla nunc, tortor malesuada eleifend sed non
                  pellentesque nunc, cursus. Laoreet cum cras nunc eu,
                  molestie facilisi diam odio. Proin eu praesent arcu
                  commodo dictumst. Vitae volutpat amet mattis
                  tristique et risus.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box maxWidth={520}></Box>
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
      <Box pt={16}>
        <Box pt="1px" pb="8em" bgcolor="grey.100">
          <Box mt={-16}>
            <Container maxWidth="md">
              <VideoWrapper>
                <YouTube
                  videoId="68XZgPMLp50"
                  opts={{ width: '100%', height: '100%' }}
                />
              </VideoWrapper>
              <Box mt="4em">
                <Typography
                  variant="h3"
                  align="center"
                  color="primary"
                  component="h2"
                >
                  A little taster of one of our tours...
                </Typography>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

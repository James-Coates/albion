import { VideoWrapper } from '@components/molecules/video-wrapper';
import { Box, Container } from '@material-ui/core';
import YouTube from 'react-youtube';

interface VideoBlockProps {
  youtubeId: string;
}

export const VideoBlock: React.FC<VideoBlockProps> = ({
  children,
  youtubeId,
}) => {
  return (
    <Box pt={16}>
      <Box pt="1px" pb="8em" bgcolor="grey.100">
        <Box mt={-16}>
          <Container maxWidth="lg">
            <VideoWrapper>
              <YouTube
                videoId={youtubeId}
                opts={{ width: '100%', height: '100%' }}
              />
            </VideoWrapper>
            <Box mt="6em">{children}</Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

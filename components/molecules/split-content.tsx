import { Grid } from '@material-ui/core';
import Image, { ImageProps } from 'next/image';
import { FC } from 'react';
import styled, { css } from 'styled-components';

interface SplitContentProps {
  image: string | null;
  reverse?: boolean;
}
// #TODO sort image null

interface ContentGridProps {
  $reverse?: boolean;
}

const ContentGrid = styled(Grid)<ContentGridProps>`
  display: flex;
  ${({ theme, $reverse }) => css`
    ${theme.breakpoints.up('md')} {
      ${$reverse
        ? css`
            flex-direction: row-reverse;
            ${ImageWrapper} {
              margin-left: 10%;
            }
            ${ContentWrapper} {
              margin-left: auto;
            }
          `
        : css`
            ${ImageWrapper} {
              margin-right: 10%;
            }
            ${ContentWrapper} {
              margin-right: auto;
            }
          `}
    }
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 60%;
  background-color: grey;
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const AbsoluteImage = styled(Image)<ImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Text = styled.div`
  flex: 0 1 40%;
`;

export const SplitContent: FC<SplitContentProps> = ({
  image,
  children,
  reverse,
}) => {
  return (
    <ContentGrid container alignItems="center" $reverse={reverse}>
      <Grid item xs={12} md={7}>
        <ImageWrapper>
          {image ? (
            <AbsoluteImage
              src={image}
              layout="fill"
              objectFit="cover"
            />
          ) : null}
        </ImageWrapper>
      </Grid>
      <Grid item xs={12} md={5}>
        <ContentWrapper>{children}</ContentWrapper>
      </Grid>
    </ContentGrid>
  );
};

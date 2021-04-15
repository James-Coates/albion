import { Box, Typography } from '@material-ui/core';
import { isOdd } from 'helpers';
import Image from 'next/image';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { TimelineItem } from './timeline-item';

const fakeData = [
  {
    heading: 'Pickup',
    subHeading: '9:00am',
    copy:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia harum aliquam aspernatur vel odio eos quia error, pariatur ea porro labore praesentium provident sint, reprehenderit magnam reiciendis voluptatum. Minus eaque cum a aliquam dolore provident quos commodi ad. Dolores.',
    label: 'London Station',
  },
  {
    heading: 'Heading',
    subHeading: 'Sub Heading',
    copy:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia harum aliquam aspernatur vel odio eos quia error, pariatur ea porro labore praesentium provident sint, reprehenderit magnam reiciendis voluptatum. Minus eaque cum a aliquam dolore provident quos commodi ad. Dolores.',
    label: 'label',
    image: 'https://source.unsplash.com/random',
  },
  {
    heading: 'Heading',
    subHeading: 'Sub Heading',
    copy:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia harum aliquam aspernatur vel odio eos quia error, pariatur ea porro labore praesentium provident sint, reprehenderit magnam reiciendis voluptatum. Minus eaque cum a aliquam dolore provident quos commodi ad. Dolores.',
    label: 'label',
    image: 'https://source.unsplash.com/random',
  },
  {
    heading: 'Heading',
    subHeading: 'Sub Heading',
    copy:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia harum aliquam aspernatur vel odio eos quia error, pariatur ea porro labore praesentium provident sint, reprehenderit magnam reiciendis voluptatum. Minus eaque cum a aliquam dolore provident quos commodi ad. Dolores.',
    label: 'label',
    image: 'https://source.unsplash.com/random',
  },
  {
    heading: 'Heading',
    subHeading: 'Sub Heading',
    copy:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis mollitia harum aliquam aspernatur vel odio eos quia error, pariatur ea porro labore praesentium provident sint, reprehenderit magnam reiciendis voluptatum. Minus eaque cum a aliquam dolore provident quos commodi ad. Dolores.',
    label: 'label',
    image: 'https://source.unsplash.com/random',
  },
];

interface TimelineProps {}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 500px;

  ${({ theme }) => css`
    ${theme.breakpoints.down('sm')} {
      padding-left: 40px;
    }
  `}
`;

interface LayoutItemProps {
  $reverse?: boolean;
}
const LayoutItem = styled.div<LayoutItemProps>`
  padding: 10vh 0;
  /* opacity: 0.3; */
  display: flex;
  position: relative;

  ${({ $reverse, theme }) => css`
    ${theme.breakpoints.up('md')} {
      width: calc(50% - 40px);
      ${$reverse
        ? css`
            align-self: flex-end;
          `
        : css`
            ${Indicator} {
              left: auto;
              right: -44px;
            }
          `};
    }
  `}
`;

const Line = styled.div`
  position: absolute;
  height: 100%;
  width: 4px;
  background-color: #e7e7e7;
  left: 0px;

  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      left: 50%;
    }
  `}
`;

const Indicator = styled.div`
  position: absolute;
  height: 40px;
  width: 4px;
  background-color: #0c1352;
  left: -40px;
  top: 40%;
  text-align: center;
`;

const IndicatorLabel = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  transform: translate(-50%, -110%);
  top: 0;
  left: 0;
  backdrop-filter: 8px;
  padding: 4px;
`;

export const Timeline: FC<TimelineProps> = () => {
  return (
    <Wrapper>
      <Line />
      {fakeData.map((item, i) => (
        <LayoutItem key={i} $reverse={isOdd(i)}>
          <Indicator>
            <IndicatorLabel>
              <Typography variant="body2">{item.label}</Typography>
            </IndicatorLabel>
          </Indicator>
          <TimelineItem>
            {item.image ? (
              <Box pt="55%" position="relative" mb={4}>
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </Box>
            ) : null}
            <Typography variant="body2" gutterBottom>
              {item.subHeading}
            </Typography>
            <Typography variant="h3" gutterBottom>
              {item.heading}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {item.copy}
            </Typography>
          </TimelineItem>
        </LayoutItem>
      ))}
    </Wrapper>
  );
};

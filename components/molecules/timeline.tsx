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

interface TimelineProps {
  type?: 'full' | 'alternating';
}

const Line = styled.div`
  position: absolute;
  height: 100%;
  width: 4px;
  background-color: #e7e7e7;
  left: 0px;
`;

const LayoutItem = styled.div<LayoutItemProps>`
  padding: 10vh 0;
  /* opacity: 0.3; */
  display: flex;
  align-items: center;
  position: relative;
  min-height: 70vh;

  ${({ $reverse, theme }) => css`
    ${theme.breakpoints.up('md')} {
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

const Wrapper = styled.div<TimelineProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  padding-left: 40px;

  ${({ theme }) => css`
    ${theme.breakpoints.down('sm')} {
      padding-left: 40px;
    }
  `}

  ${({ type, theme }) =>
    type === 'alternating'
      ? css`
          ${Line} {
            ${theme.breakpoints.up('md')} {
              left: 50%;
            }
          }
        `
      : null}

  ${({ type, theme }) =>
    type === 'alternating'
      ? css`
          ${LayoutItem} {
            ${theme.breakpoints.up('md')} {
              width: calc(50% - 40px);
            }
          }
        `
      : null}
`;

interface LayoutItemProps {
  $reverse?: boolean;
}

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

export const Timeline: FC<TimelineProps> = ({ type }) => {
  return (
    <Wrapper type={type}>
      <Line />
      {fakeData.map((item, i) => (
        <LayoutItem
          key={i}
          $reverse={type === 'alternating' ? isOdd(i) : true}
        >
          <Indicator>
            <IndicatorLabel>
              <Typography variant="body2">{item.label}</Typography>
            </IndicatorLabel>
          </Indicator>
          <TimelineItem index={i}>
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

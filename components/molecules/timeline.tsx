import { Box, Typography } from '@material-ui/core';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { motion, Variants } from 'framer-motion';
import { isOdd } from 'helpers';
import Image from 'next/image';
import { FC, useState } from 'react';
import { urlFor } from 'sanity-client.config';
import styled, { css } from 'styled-components';
import { BlockContent, BlockContentProps } from './block-content';
import { TimelineItem } from './timeline-item';

export interface TimelineItemType {
  label: string;
  heading: string;
  overline: string;
  content: BlockContentProps;
  image?: SanityImageSource;
}

interface TimelineProps {
  type?: 'full' | 'alternating';
  items: TimelineItemType[];
  activeItem?: number;
  onItemVisibilityChange?: (
    index: number,
    inView: boolean,
    entry: IntersectionObserverEntry,
  ) => void;
}

interface WrapperProps {
  type?: 'full' | 'alternating';
}

const Line = styled.div`
  position: absolute;
  height: 100%;
  width: 1px;
  background-color: #ececec;
  left: 1px;
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

const Wrapper = styled.div<WrapperProps>`
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
  background-color: ${({ theme }) => theme.palette.secondary.main};
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

const itemVariants: Variants = {
  rest: { opacity: 0.2, y: 0 },
  active: { opacity: 1, y: -40 },
};

export const Timeline: FC<TimelineProps> = ({
  items,
  type,
  activeItem,
  onItemVisibilityChange,
}) => {
  return (
    <Wrapper type={type}>
      <Line />
      {items.map((item, i) => (
        <motion.div
          variants={itemVariants}
          animate={activeItem === i ? 'active' : 'rest'}
          transition={{ duration: 1 }}
          key={i}
        >
          <LayoutItem
            $reverse={type === 'alternating' ? isOdd(i) : true}
          >
            <Indicator>
              <IndicatorLabel>
                <Typography variant="body2">{item.label}</Typography>
              </IndicatorLabel>
            </Indicator>
            <TimelineItem
              index={i}
              onVisibilityChange={
                onItemVisibilityChange
                  ? (inView, entry) =>
                      onItemVisibilityChange(i, inView, entry)
                  : undefined
              }
            >
              {item.image ? (
                <Box pt="55%" position="relative" mb={4}>
                  <Image
                    src={urlFor(item.image).url() || ''}
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </Box>
              ) : null}
              <Typography variant="overline" gutterBottom>
                {item.overline}
              </Typography>
              <Typography variant="h3" gutterBottom>
                {item.heading}
              </Typography>
              <BlockContent blocks={item.content} />
            </TimelineItem>
          </LayoutItem>
        </motion.div>
      ))}
    </Wrapper>
  );
};

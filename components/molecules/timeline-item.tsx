import { FC } from 'react';
import { InView, useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';

interface TimelineItemProps {
  index: number;
  onVisibilityChange?: (
    visible: boolean,
    entry: IntersectionObserverEntry,
  ) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimelineItem: FC<TimelineItemProps> = ({
  index,
  onVisibilityChange,
  children,
}) => {
  return (
    <InView onChange={onVisibilityChange} threshold={[0.25, 0.75]}>
      {({ inView, ref, entry }) => (
        <Wrapper ref={ref}>{children}</Wrapper>
      )}
    </InView>
  );
};

import { FC } from 'react';
import { InView, useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';

interface TimelineItemProps {
  index: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimelineItem: FC<TimelineItemProps> = ({
  index,
  children,
}) => {
  function onChange(x: any) {
    console.log(x, index);
  }
  return (
    <InView onChange={onChange}>
      {({ inView, ref, entry }) => (
        <Wrapper ref={ref}>{children}</Wrapper>
      )}
    </InView>
  );
};

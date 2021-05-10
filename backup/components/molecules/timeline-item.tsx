import { FC } from 'react';
import styled, { css } from 'styled-components';

interface TimelineItemProps {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimelineItem: FC<TimelineItemProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

import React, { ReactSVGElement } from 'react';

import { Box, Grid } from '@material-ui/core';
import { StyledIcon } from 'styled-icons/types';
import styled from 'styled-components';

interface IconItemProps {
  Icon: StyledIcon;
  iconColor?: any;
}

const Wrapper = styled.div`
  display: flex;
`;

const IconWrapper = styled(Box)`
  flex: 0 0 2.4rem;
  height: 2.4rem;
  margin-right: 0.8rem;
`;

export const IconItem: React.FC<IconItemProps> = ({
  Icon,
  iconColor,
  children,
}) => {
  return (
    <Wrapper>
      <IconWrapper color={iconColor}>
        <Icon height="100%" width="100%" />
      </IconWrapper>
      {children}
    </Wrapper>
  );
};

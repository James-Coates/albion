import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { SlideTop } from '../../animations/slide';
import { useControllableState } from '../../lib/react/use-controllable-state';
import { Box } from '@material-ui/core';

interface ExpansionPanelProps {
  open?: boolean;
  header: ReactNode;
  onToggle?: (value: boolean) => boolean | void;
  children?: ReactNode;
}

const Wrapper = styled(Box)``;

export const ExpansionPanel: FC<ExpansionPanelProps> = ({
  open,
  onToggle,
  header,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useControllableState(
    open,
    onToggle,
    false,
  );

  function onHeaderClick() {
    setIsOpen(!isOpen);
  }

  return (
    <Wrapper>
      <Box
        paddingY={4}
        paddingX={4}
        onClick={onHeaderClick}
        bgcolor="common.white"
      >
        {header}
      </Box>
      <SlideTop unmountOnExit in={isOpen} timeout={600}>
        <Box paddingBottom={4} paddingX={4} bgcolor="common.white">
          {children}
        </Box>
      </SlideTop>
    </Wrapper>
  );
};

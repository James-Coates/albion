import styled, { css } from 'styled-components';
import { Typography, TypographyProps } from '@material-ui/core';

const Outer = styled.li`
  margin: 1em 0;
`;

const Inner = styled(Typography)`
  list-style: disc;
  margin-left: 1.5em;
  margin-top: 1em;
  margin-bottom: 1em;
  display: list-item;
`;

export const ListItem: React.FC<TypographyProps> = ({ children }) => {
  return (
    <Outer>
      <Inner>{children}</Inner>
    </Outer>
  );
};

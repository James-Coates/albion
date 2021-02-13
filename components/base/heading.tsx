import React from 'react';
import { Text, TextProps } from './text';
import theme from '../../theme/theme';
import styled from 'styled-components';
import { FontSizeProps } from 'styled-system';

interface HeadingProps extends TextProps {
  level?: number;
  children?: React.ReactNode;
}

const fontSize = (type) => theme.fs[type] as FontSizeProps;

export const Heading = styled(Text).attrs((props) => ({
  fontSize: fontSize(props.type),
}))``;

Heading.propTypes = {
  ...Text.propTypes,
};

Heading.defaultProps = {
  fontFamily: 'Belwe Bold',
  type: 'h1',
};

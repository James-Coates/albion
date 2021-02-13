import styled, { css } from 'styled-components';
import { layout } from 'styled-system';
import LogoSvg from '../public/images/albion-touring.svg';

const styles = css`
  ${layout};
  color: ${({ theme }) => theme.colors.logo};
`;

export const Logo = styled(LogoSvg)`
  ${styles}
`;

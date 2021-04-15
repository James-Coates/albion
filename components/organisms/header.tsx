import { FC, useState } from 'react';
import PropTypes from 'prop-types';
import { InferPropTypes } from '../../lib/react/infer-proptypes';
import Link from 'next/link';
import { Box, Slide } from '@material-ui/core';
import { HeaderUnderline, Menu, SocialLinks } from '../molecules';
import { Button, Flex, FlexItem, Svg } from '../atoms';
import LogoSvg from '../../public/images/albion-touring.svg';
import styled, {
  css,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { HeaderBurger } from '../molecules/header/header-burger';
import { Theme } from '../../theme/theme';
import { rgba } from 'polished';

const headerVariants = ['default', 'filled'];

const headerPropTypes = {
  variant: PropTypes.oneOf(headerVariants),
  floatVariant: PropTypes.oneOf(headerVariants),
  float: PropTypes.bool,
};

const defaultHeaderProps = {
  variant: 'default',
};

interface HeaderProps
  extends InferPropTypes<
    typeof headerPropTypes,
    typeof defaultHeaderProps
  > {
  className?: string;
}

const Test = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  z-index: 2;
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows[4]};

  color: ${({ theme }) => theme.palette.common.white};

  ${({ variant, theme }) => handleVariant(variant, theme)}
`;

const HeaderWrapper = styled(Box)`
  display: flex;
  padding: ${({ theme }) => `0 ${theme.spacing(5)}`};
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const HeaderLeft = styled(Box)`
  flex: 0 0 auto;
`;

const HeaderRight = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Break = styled.span`
  height: 40px;
  width: 1px;
  background-color: white;
  opacity: 0.2;
  margin: ${({ theme }) => `0 ${theme.spacing(5)}`};
`;

const HeaderBase: FC<any> = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  function onBurgerClick() {
    setIsMenuActive(!isMenuActive);
  }
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Link href="/">
          <a>
            <Svg height={32}>
              <LogoSvg />
            </Svg>
          </a>
        </Link>
      </HeaderLeft>
      <HeaderRight>
        <Menu active={isMenuActive} />
        <Break />
        <Box mr={5}>
          <SocialLinks />
        </Box>
        <Button>Book a tour</Button>
        <HeaderBurger
          isActive={isMenuActive}
          onClick={onBurgerClick}
          zIndex={3}
        />
      </HeaderRight>
    </HeaderWrapper>
  );
};

export const Header: FC<HeaderProps> = ({
  variant,
  floatVariant,
  float,
}) => {
  float = float ? float : false;
  return (
    <>
      <Slide in={!float} direction="down">
        <StaticHeader position="absolute" variant={variant}>
          <HeaderBase />
        </StaticHeader>
      </Slide>
      <Slide in={float} direction="down" timeout={600}>
        <Test variant={floatVariant}>
          <HeaderBase />
        </Test>
      </Slide>
    </>
  );
};

export const StaticHeader = styled(Box)`
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.common.white};

  ${({ variant, theme }) => handleVariant(variant, theme)}
`;

Header.propTypes = headerPropTypes;

Header.defaultProps = defaultHeaderProps;

function handleVariant(
  variant: string | null | undefined,
  theme: Theme,
) {
  switch (variant) {
    case 'filled':
      return headerVariantFilledCss(theme);
    default:
      return headerVariantDefaultCss(theme);
  }
}

function headerVariantDefaultCss(
  theme: Theme,
): FlattenSimpleInterpolation {
  return css`
    background-color: ${rgba(theme.palette.primary.dark, 0.4)};
    backdrop-filter: blur(4px);
    /* height: auto; */

    ${theme.breakpoints.up('md')} {
      /* padding: ${theme.spacing(5)} ${theme.spacing(3)}; */
      height: 80px;
    }
  `;
}

function headerVariantFilledCss(
  theme: Theme,
): FlattenSimpleInterpolation {
  return css`
    background-color: ${theme.palette.primary.dark};
    height: 80px;
  `;
}

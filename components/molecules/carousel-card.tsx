import styled, { css } from 'styled-components';

type CarouselCardType = 'wide' | 'narrow' | string;

interface CarouselCardProps {
  type?: CarouselCardType;
}

const Wrapper = styled.div<CarouselCardProps>`
  position: relative;

  ${({ type, theme }) =>
    type === 'narrow'
      ? css`
          ${Inner} {
            width: 33vh;
            height: 50vh;

            ${theme.breakpoints.up('md')} {
              width: 50vh;
              height: 75vh;
            }
          }
        `
      : css`
          ${Inner} {
            width: 75vh;
            height: 50vh;

            ${theme.breakpoints.up('md')} {
              width: 112.5vh;
              height: 75vh;
            }
          }
        `}
`;

const Inner = styled.div`
  position: relative;
`;

export const CarouselCard: React.FC<CarouselCardProps> = ({
  type,
  children,
}) => {
  return (
    <Wrapper type={type}>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

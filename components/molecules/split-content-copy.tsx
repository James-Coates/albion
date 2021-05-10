import styled, { css } from 'styled-components';

interface Props {
  className?: string;
}

const Container = styled.div`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(2)};
  max-width: 720px;

  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      width: 90%;
    }
  `}
  ${({ theme }) => css`
    ${theme.breakpoints.up('lg')} {
      width: 70%;
    }
  `}
`;

const SplitContentCopyComponent: React.FC<Props> = ({
  className,
  children,
}) => {
  return (
    <div className={className}>
      <Container>{children}</Container>
    </div>
  );
};

export const SplitContentCopy = styled(SplitContentCopyComponent)`
  flex: 1;
`;

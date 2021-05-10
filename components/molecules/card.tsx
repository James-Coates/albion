import styled from 'styled-components';

// export const CardHeader;

const CardWrapper = styled.div`
  position: relative;
  padding: 32px;
`;

export const Card: React.FC = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

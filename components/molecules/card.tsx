import styled from 'styled-components';

// export const CardHeader;

const CardWrapper = styled.div`
  position: relative;
  box-shadow: 0px 4px 16px rgba(17, 17, 26, 0.1),
    0px 8px 32px rgba(17, 17, 26, 0.05);
  overflow: hidden;
`;

export const Card: React.FC = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

import React from 'react';

interface SwitchProps {
  condition: boolean;
  wrapper?: React.ReactNode;
}

export const Switch: React.FC<SwitchProps> = ({
  children,
  condition,
  wrapper,
}) => {
  return (
    <>{condition ? <div>{children}</div> : <div>{children}</div>}</>
  );
  // return <div>{children}</div>;
};

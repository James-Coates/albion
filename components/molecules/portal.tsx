import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  selector: string;
}

export const Portal: React.FC<PortalProps> = ({
  children,
  selector,
}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  });

  const entry = mounted ? document.getElementById(selector) : null;

  return mounted && entry ? createPortal(children, entry) : null;
};

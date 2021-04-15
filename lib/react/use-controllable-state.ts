import { useState } from 'react';

export function useControllableState(
  value,
  changeHandler,
  initialValue,
) {
  const [stateValue, setState] = useState(initialValue);
  const effectiveValue = value !== undefined ? value : stateValue;
  return [
    effectiveValue,
    (newValue) => {
      setState(newValue);
      if (changeHandler) {
        changeHandler(newValue);
      }
    },
  ];
}

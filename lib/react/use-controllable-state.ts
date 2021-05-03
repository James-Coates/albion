import { useState } from 'react';

export function useControllableState<T>(
  value: T,
  changeHandler: (newValue: T) => void,
  initialValue: T,
) {
  const [stateValue, setState] = useState(initialValue);
  const effectiveValue = value !== undefined ? value : stateValue;
  return [
    effectiveValue,
    (newValue: T) => {
      setState(newValue);
      if (changeHandler) {
        changeHandler(newValue);
      }
    },
  ];
}

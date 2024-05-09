import { useEffect, useState } from 'react';

export const useDebauncedValue = <T>(value: T, timeout = 200) => {
  const [debauncedValue, setDebauncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebauncedValue(value);
    }, timeout);

    return () => clearTimeout(timer);
  }, [value, timeout]);

  return debauncedValue;
};

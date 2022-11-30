/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

interface Props {
  input: string;
  delay?: number;
}

export const useDevouncedValue = ({ input, delay = 500 }: Props) => {
  const [devouncedValue, setDevouncedValue] = useState<string>(input);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDevouncedValue(input);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [input]);

  return { devouncedValue };
};

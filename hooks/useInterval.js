import { useEffect, useRef } from 'react';

function useInterval(callback, delay = 1000) {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    if (!delay) {
      return () => {};
    }

    const interval = setInterval(() => {
      if (callbackRef.current) callbackRef.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
}

export default useInterval;

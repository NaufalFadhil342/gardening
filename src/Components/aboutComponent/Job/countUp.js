import React, { useRef, useState, useEffect, useCallback } from 'react';

export const CountUp = ({ end, className }) => {
  const [counter, setCounter] = useState(null);

  const ref = useRef(0);

  const accumulator = end / 200;

  const updatedCounter = useCallback(() => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setCounter(end);
      setCounter(result);
      ref.current = result;
    }
    setTimeout(updatedCounter, 25);
  }, [accumulator, end]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updatedCounter();
    }

    return () => (isMounted = false);
  }, [updatedCounter]);

  return <div className={className}>{counter}</div>;
};

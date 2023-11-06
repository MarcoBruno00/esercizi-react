import { useState, useCallback } from "react";

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCounter((c) => c - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return { counter, handleIncrement, handleDecrement, handleReset };
}
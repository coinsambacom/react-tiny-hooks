import { useEffect, useCallback } from "react";

export default function useDebounce(
  effect: (...args: any[]) => any,
  delay: number,
  deps: any[]
) {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
}

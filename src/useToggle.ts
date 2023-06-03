import { useCallback, useState } from "react";

const useToggle = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => setState(oldState => !oldState), []);

  return [state, toggle];
};

export default useToggle;

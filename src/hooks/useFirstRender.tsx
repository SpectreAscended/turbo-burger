import { useEffect, useRef } from 'react';

// This custom hook will prevent a useEffect call from running on first render.

const useFirstRender = () => {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
};

export default useFirstRender;

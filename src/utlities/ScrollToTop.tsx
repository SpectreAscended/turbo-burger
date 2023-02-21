import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This helper component insures that the loaded page is scrolled to the top when the url path changes.

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

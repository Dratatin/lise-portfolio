import { useEffect, useState } from 'react';

const useWindowHeightSize = () => {
  const [windowHeightSize, setWindowHeightSize] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeightSize(window.innerHeight)
    };

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return windowHeightSize
};

export default useWindowHeightSize
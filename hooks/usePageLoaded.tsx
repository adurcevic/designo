import { useState, useEffect } from 'react';

const usePageLoaded = () => {
  // Undefined during SSR.
  const [loaded, setLoaded] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const callback = () => {
      setLoaded(document.readyState === 'complete');
    };

    callback();
    document.addEventListener('readystatechange', callback);
    return () => document.removeEventListener('readystatechange', callback);
  }, []);

  return loaded;
};

export default usePageLoaded;

import { useState, useEffect, RefObject } from 'react';

const useIntersection = (ref: RefObject<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(false);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);
    const element = ref.current;

    function cb(entries: any) {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
      if (element && isVisible) {
        observer.unobserve(element);
      }
    }
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, isVisible]);

  return isVisible;
};

export default useIntersection;

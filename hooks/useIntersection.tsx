import { useState, useEffect, RefObject } from 'react';

const useIntersection = (ref: RefObject<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(cb, {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    });
    const element = ref.current;

    function cb(entries: IntersectionObserverEntry[]) {
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

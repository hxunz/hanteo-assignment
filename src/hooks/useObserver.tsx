import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from 'src/hooks';
import { loadContents } from 'src/redux/contentsSlice';

const useObserver = () => {
  const dispatch = useAppDispatch();

  const [isLoading, setLoading] = useState(false);

  const target = useRef(null);

  const callback = async () => {
    setLoading(true);
    await dispatch(loadContents());
    setLoading(false)
  };

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target.current) {
      observer = new IntersectionObserver(callback, options);
      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [target]);

  const options = {
    threshold: 1.0
  };

  return {
    target,
    isLoading
  }
};

export default useObserver;

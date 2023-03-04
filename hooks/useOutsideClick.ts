import { useEffect, useRef } from 'react';

export const useOutsideClick = (
  callback: Function,
  excludeElementById?: string
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        !ref.current?.contains(event.target) &&
        event.target.id !== excludeElementById
      ) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
};

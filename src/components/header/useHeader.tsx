import React from 'react';
import type { MockDataHeader } from '../../types/types';

export const useHeader = () => {
  const mockDataHeader: MockDataHeader[] = [
    {
      id: 1,
      title: 'Lorem One',
    },
    {
      id: 2,
      title: 'Lorem Two',
    },
    {
      id: 3,
      title: 'Lorem Three',
    },
    {
      id: 4,
      title: 'Lorem Four',
    },
    {
      id: 5,
      title: 'Lorem Five',
    },
  ];
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);

  const handleScrolling = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 300) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScrolling);
    return () => window.removeEventListener('scroll', handleScrolling);
  }, []);

  return { isScrolling, mockDataHeader };
};

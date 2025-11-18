import React from 'react';

export const useMobile = () => {
  const [mobile, setMobile] = React.useState<boolean>(false);
  const handleResize = () => {
    setMobile(window.innerWidth <= 768);
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { mobile };
};

import React from 'react';
import type { Config } from '../types/types';

export const useConfig = () => {
  const [config, setConfig] = React.useState<Config>({
    citizenship: '',
    startDate: '',
    days: '',
    country: '',
    boardType: '',
  });

  return { config, setConfig };
};

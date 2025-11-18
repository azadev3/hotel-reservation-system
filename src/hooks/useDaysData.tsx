import React from 'react';
import type { Config, DaySelection } from '../types/types';

export const useDaysData = (config: Config) => {
  const [daysData, setDaysData] = React.useState<DaySelection[]>([]);

  React.useEffect(() => {
    if (!config.startDate || !config.days) {
      setDaysData([]);
      return;
    }

    const start = new Date(config.startDate);
    const arr: DaySelection[] = Array.from({ length: config.days }).map((_, idx) => {
      const d = new Date(start);
      d.setDate(start.getDate() + idx);
      return {
        dayIndex: idx,
        date: d.toISOString().slice(0, 10),
        hotelId: null,
        lunchId: null,
        dinnerId: null,
      };
    });

    setDaysData(arr);
  }, [config.startDate, config.days]);

  return { daysData, setDaysData };
};

import React from 'react';
import type { DaySelection } from '../../../../types/types';

export const usePagination = (daysData: DaySelection[]) => {
  const [page, setPage] = React.useState<number>(1);
  const pageSize: number = 10;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedDays = daysData.slice(start, end);

  return { paginatedDays, setPage, page, end, start};
};

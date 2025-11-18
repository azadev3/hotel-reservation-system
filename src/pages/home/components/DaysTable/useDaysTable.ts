import type { DaySelection } from '../../../../types/types';
import { applyMealRules } from './mealRules';

interface PropsUseDaysTable {
  daysData: DaySelection[];
  setDaysData: (d: DaySelection[]) => void;
  boardType: string;
}

export const useDaysTable = ({ daysData, setDaysData, boardType }: PropsUseDaysTable) => {
  const updateDay = (i: number, patch: any) => {
    const copy = [...daysData];
    copy[i] = { ...copy[i], ...patch };
    setDaysData(copy);
  };

  const onHotelChange = (i: number, val: string) => {
    updateDay(i, { hotelId: val ? Number(val) : null });
  };

  const onLunchChange = (i: number, val: string) => {
    const id = val ? Number(val) : null;
    updateDay(i, applyMealRules(boardType, 'lunch', id));
  };

  const onDinnerChange = (i: number, val: string) => {
    const id = val ? Number(val) : null;
    updateDay(i, applyMealRules(boardType, 'dinner', id));
  };

  return { onHotelChange, onLunchChange, onDinnerChange, updateDay };
};

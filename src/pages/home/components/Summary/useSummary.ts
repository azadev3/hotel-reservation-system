import { useMemo } from 'react';
import { getHotels } from '../../../../mock/hotels';
import { getMeals } from '../../../../mock/meals';
import type {
  Config,
  DaySelection,
  HotelCountry,
  MealItem,
} from '../../../../types/types';
import { useTranslation } from 'react-i18next';

interface PropsUseSummary {
  daysData: DaySelection[];
  config: Config;
}

export const useSummary = ({ config, daysData }: PropsUseSummary) => {
  const { t } = useTranslation();
  const meals = getMeals(t);
  const findHotel = (country: string, id: number | null): HotelCountry | null => {
    if (!country || id === null) return null;
    const hotels = getHotels(t);
    const list = hotels[country] ?? [];
    return list.find(h => h.id === id) ?? null;
  };

  const findMeal = (
    country: string,
    type: 'lunch' | 'dinner',
    id: number | null,
  ): MealItem | null => {
    if (!country || id === null) return null;
    const list = meals[country]?.[type] ?? [];
    return list.find(m => m.id === id) ?? null;
  };

  const totalPrice = useMemo(() => {
    if (!config.country) return 0;

    let sum = 0;

    daysData.forEach(day => {
      const hotel = findHotel(config.country, day.hotelId);
      const lunch = findMeal(config.country, 'lunch', day.lunchId);
      const dinner = findMeal(config.country, 'dinner', day.dinnerId);

      if (hotel) sum += hotel.price;
      if (lunch) sum += lunch.price;
      if (dinner) sum += dinner.price;
    });

    return sum;
  }, [daysData, config.country]);

  return { totalPrice, findMeal, findHotel };
};

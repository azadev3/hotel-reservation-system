import type { MealsMainType } from '../types/types';
import { type TFunction } from 'i18next';

export const getMeals = (t: TFunction): MealsMainType => ({
  Turkey: {
    dinner: [
      { id: 1, name: t('meals.turkey.dinner.turkish_kebab'), price: 15 },
      { id: 2, name: t('meals.turkey.dinner.istanbul_fish_plate'), price: 18 },
      { id: 3, name: t('meals.turkey.dinner.traditional_meat_stew'), price: 20 },
    ],
    lunch: [
      { id: 4, name: t('meals.turkey.lunch.chicken_pilaf'), price: 10 },
      { id: 5, name: t('meals.turkey.lunch.lentil_soup_set'), price: 8 },
      { id: 6, name: t('meals.turkey.lunch.veggie_plate'), price: 9 },
    ],
  },

  UAE: {
    dinner: [
      { id: 7, name: t('meals.uae.dinner.arabic_mixed_grill'), price: 25 },
      { id: 8, name: t('meals.uae.dinner.dubai_seafood_dinner'), price: 30 },
    ],
    lunch: [
      { id: 9, name: t('meals.uae.lunch.shawarma_plate'), price: 12 },
      { id: 10, name: t('meals.uae.lunch.hummus_falafel_set'), price: 11 },
    ],
  },

  Italy: {
    dinner: [
      { id: 11, name: t('meals.italy.dinner.pasta_carbonara'), price: 20 },
      { id: 12, name: t('meals.italy.dinner.italian_seafood_dinner'), price: 28 },
    ],
    lunch: [
      { id: 13, name: t('meals.italy.lunch.pizza_margheripta'), price: 12 },
      { id: 14, name: t('meals.italy.lunch.lasagna_set'), price: 14 },
    ],
  },
});

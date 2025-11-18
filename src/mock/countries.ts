import type { TFunction } from 'i18next';
import type { CountriesInterface } from '../types/types';

export const getCountries = (t: TFunction): CountriesInterface[] => [
  { id: 1, key: 'Turkey', name: t('countries.turkey') },
  { id: 2, key: 'UAE', name: t('countries.uae') },
  { id: 3, key: 'Italy', name: t('countries.italy') },
];

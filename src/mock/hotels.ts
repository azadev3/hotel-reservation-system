import type { TFunction } from 'i18next';
import type { HotelsInterface } from '../types/types';

export const getHotels = (t: TFunction): HotelsInterface => ({
  Turkey: [
    { id: 101, name: t('hotels.turkey.hilton_istanbul'), price: 120 },
    { id: 102, name: t('hotels.turkey.titanic_antalya'), price: 90 },
  ],

  UAE: [
    { id: 201, name: t('hotels.uae.dubai_marina_hotel'), price: 200 },
    { id: 202, name: t('hotels.uae.palm_jumeirah_resort'), price: 300 },
  ],

  Italy: [{ id: 301, name: t('hotels.italy.rome_center_hotel'), price: 150 }],
});

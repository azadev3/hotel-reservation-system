// BoardTypes.ts
import type { BoardTypeInterface } from '../types/types';
import type { TFunction } from 'i18next';

export const getBoardTypes = (t: TFunction): BoardTypeInterface[] => [
  { code: 'FB', name: t('board_types.full_board') },
  { code: 'HB', name: t('board_types.half_board') },
  { code: 'NB', name: t('board_types.no_board') },
];

export const applyMealRules = (
  boardType: string,
  type: 'lunch' | 'dinner',
  id: number | null,
) => {
  if (boardType === 'NB') return { lunchId: null, dinnerId: null };

  if (boardType === 'HB') {
    if (type === 'lunch') return { lunchId: id, dinnerId: null };
    if (type === 'dinner') return { dinnerId: id, lunchId: null };
  }

  if (type === 'lunch') return { lunchId: id };
  return { dinnerId: id };
};

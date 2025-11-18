import React from 'react';
import { getHotels } from '../../../../mock/hotels';
import type { Config, DaySelection } from '../../../../types/types';
import Select from '../../../../ui/Select';
import { useDaysTable } from './useDaysTable';
import { usePagination } from './usePagination';
import { HiMiniCalendarDays } from 'react-icons/hi2';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { getMeals } from '../../../../mock/meals';

interface Props {
  config: Config;
  daysData: DaySelection[];
  setDaysData: (d: DaySelection[]) => void;
}

const DaysTable: React.FC<Props> = ({ config, daysData, setDaysData }) => {
  const { t } = useTranslation();
  const meals = getMeals(t);
  const hotels = getHotels(t);
  const { end, page, paginatedDays, setPage } = usePagination(daysData ?? []);
  const { onDinnerChange, onHotelChange, onLunchChange } = useDaysTable({
    daysData: daysData,
    setDaysData: setDaysData,
    boardType: config.boardType,
  });

  const hotelList = config.country ? (hotels as any)[config.country] ?? [] : [];
  const mealList = config.country
    ? (meals as any)[config.country] ?? { lunch: [], dinner: [] }
    : { lunch: [], dinner: [] };

  if (!config.startDate || config.days <= 0) {
    return <p className="daysTableEmpty">{t('empty_msg')}</p>;
  }

  return (
    <div className="daysContainer">
      <div className="title-container">
        <HiMiniCalendarDays className="icon" />
        <h3>{t('days_table.total_days')}</h3>
      </div>
      <div className="daysTable">
        <table>
          <thead>
            <tr>
              <th>{t('days_table.day')}</th>
              <th>{t('days_table.date')}</th>
              <th>{t('days_table.hotel')}</th>
              <th>{t('days_table.lunch')}</th>
              <th>{t('days_table.dinner')}</th>
            </tr>
          </thead>
          <tbody>
            {paginatedDays.map(d => (
              <tr key={d.dayIndex}>
                <td>{d.dayIndex + 1}</td>
                <td>{moment(d.date).format('DD.MM.YYYY')}</td>

                <td>
                  <Select
                    showLable={false}
                    label={t('days_table.hotel')}
                    value={d.hotelId ?? ''}
                    options={hotelList}
                    valueType="id"
                    onChange={e => onHotelChange(d.dayIndex, e.target.value)}
                  />
                </td>

                <td>
                  <Select
                    showLable={false}
                    label={t('days_table.lunch')}
                    value={d.lunchId ?? ''}
                    valueType="id"
                    disabled={config.boardType === 'NB'}
                    options={mealList?.lunch || []}
                    onChange={e => onLunchChange(d.dayIndex, e.target.value)}
                  />
                </td>

                <td>
                  <Select
                    showLable={false}
                    label={t('days_table.dinner')}
                    value={d.dinnerId ?? ''}
                    valueType="id"
                    disabled={config.boardType === 'NB'}
                    options={mealList?.dinner || []}
                    onChange={e => onDinnerChange(d.dayIndex, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          className={page === 1 ? 'disabled' : ''}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          <p>{t('days_table.prev')}</p>
        </button>

        <span>{page}</span>

        <button
          className={end >= daysData.length ? 'disabled' : ''}
          disabled={end >= daysData.length}
          onClick={() => setPage(page + 1)}
        >
          <p>{t('days_table.next')}</p>
        </button>
      </div>
    </div>
  );
};

export default DaysTable;

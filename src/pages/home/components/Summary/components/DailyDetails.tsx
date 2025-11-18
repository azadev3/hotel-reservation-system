import React from 'react';
import type { Config, DaySelection } from '../../../../../types/types';
import { BsCalendar2Date } from 'react-icons/bs';
import { useSummary } from '../useSummary';
import { LuRefreshCw } from 'react-icons/lu';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

interface PropsDailyDetails {
  daysData: DaySelection[];
  config: Config;
}

const DailyDetails: React.FC<PropsDailyDetails> = ({ daysData, config }) => {
  const { t } = useTranslation();
  const { findHotel, findMeal } = useSummary({ config: config, daysData: daysData });

  return (
    <div className="summary-details">
      <div className="title-with-icon">
        <LuRefreshCw className="icon-config" />
        <h3>{t('daily_details.title')}</h3>
      </div>

      <div className="days-grid">
        {daysData.map(d => {
          const hotel = findHotel(config.country, d.hotelId);
          const lunch = findMeal(config.country, 'lunch', d.lunchId);
          const dinner = findMeal(config.country, 'dinner', d.dinnerId);

          const dayTotal =
            (hotel?.price || 0) + (lunch?.price || 0) + (dinner?.price || 0);

          return (
            <div key={d.dayIndex} className="dayCard">
              <div className="date">
                <BsCalendar2Date className="calendar" />
                <p>{moment(d.date).format('DD.MM.YYYY')}</p>
              </div>

              <div className="row-container">
                <div className="row">
                  <span>{t('daily_details.hotel')}:</span>
                  <p>
                    {hotel ? `${hotel.name} ($${hotel.price})` : t('daily_details.none')}
                  </p>
                </div>

                <div className="row">
                  <span>{t('daily_details.lunch')}:</span>
                  <p>
                    {lunch ? `${lunch.name} ($${lunch.price})` : t('daily_details.none')}
                  </p>
                </div>

                <div className="row">
                  <span>{t('daily_details.dinner')}:</span>
                  <p>
                    {dinner
                      ? `${dinner.name} ($${dinner.price})`
                      : t('daily_details.none')}
                  </p>
                </div>
              </div>

              <div className="dayTotal">
                <p>{t('daily_details.day_total')}:</p>
                <span>${dayTotal}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyDetails;

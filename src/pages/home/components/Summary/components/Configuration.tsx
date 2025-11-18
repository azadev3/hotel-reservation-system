import React from 'react';
import type { Config } from '../../../../../types/types';
import { GrDocumentConfig } from 'react-icons/gr';
import { IoIosPerson } from 'react-icons/io';
import { BsCalendar2Date } from 'react-icons/bs';
import { HiMiniCalendarDateRange } from 'react-icons/hi2';
import { GoLocation } from 'react-icons/go';
import { IoFastFoodOutline } from 'react-icons/io5';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

interface PropsConfiguration {
  config: Config;
}

const Configuration: React.FC<PropsConfiguration> = ({ config }) => {
  const { t } = useTranslation();

  return (
    <div className="summary-section">
      <div className="title-with-icon">
        <GrDocumentConfig className="icon-config" />
        <h3>{t('configuration.title')}</h3>
      </div>
      <ul>
        <li>
          <span>
            <IoIosPerson className="icon-in" />
            <span>{t('configuration.citizenship')}:</span>
          </span>
          <p>{config.citizenship || t('configuration.none')}</p>
        </li>
        <li>
          <span>
            <BsCalendar2Date className="icon-in" />
            <span>{t('configuration.start_date')}:</span>
          </span>
          <p>
            {config.startDate && moment(config.startDate).isValid()
              ? moment(config.startDate).format('DD.MM.YYYY')
              : t('configuration.none')}
          </p>
        </li>
        <li>
          <span>
            <HiMiniCalendarDateRange className="icon-in" />
            <span>{t('configuration.days')}:</span>
          </span>
          <p>{config.days}</p>
        </li>
        <li>
          <span>
            <GoLocation className="icon-in" />
            <span>{t('configuration.destination')}:</span>
          </span>
          <p>{config.country || t('configuration.none')}</p>
        </li>
        <li>
          <span>
            <IoFastFoodOutline className="icon-in" />
            <span>{t('configuration.board_type')}:</span>
          </span>
          <p>{config.boardType || t('configuration.none')}</p>
        </li>
      </ul>
    </div>
  );
};

export default Configuration;

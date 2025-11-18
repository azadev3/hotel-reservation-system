import React from 'react';
import type { Config, DaySelection } from '../../../../types/types';
import { IoDocumentTextOutline } from 'react-icons/io5';
import Configuration from './components/Configuration';
import DailyDetails from './components/DailyDetails';
import { useSummary } from './useSummary';
import SummaryFinal from './components/SummaryFinal';
import { useTranslation } from 'react-i18next';

interface Props {
  config: Config;
  daysData: DaySelection[];
}

const Summary: React.FC<Props> = ({ config, daysData }) => {
  const { totalPrice } = useSummary({ config: config, daysData: daysData });
  const { t } = useTranslation();

  return (
    <div className="summary">
      <div className="title-container">
        <IoDocumentTextOutline className="icon" />
        <h3>{t('summary.summary')}</h3>
      </div>

      {/* CONFIGURATION */}
      <Configuration config={config} />
      {/* DAILY DETAILS */}
      <DailyDetails config={config} daysData={daysData} />
      {/* GRAND TOTAL */}
      <SummaryFinal totalPrice={totalPrice} />
    </div>
  );
};

export default Summary;

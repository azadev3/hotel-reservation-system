import React from 'react';
import '../home/style.scss';
import TitleContent from './components/TitleContent';
import FormSection from './components/FormSection/FormSection';
import { useConfig } from '../../hooks/useConfig';
import { useDaysData } from '../../hooks/useDaysData';
import DaysTable from './components/DaysTable/DaysTable';
import Summary from './components/Summary/Summary';

const Home: React.FC = () => {
  const { config, setConfig } = useConfig();
  const { daysData, setDaysData } = useDaysData(config);

  return (
    <div className="home-page-wrapper">
      <div className="home-page">
        <TitleContent />
        <FormSection config={config} setConfig={setConfig} />
        <DaysTable config={config} daysData={daysData} setDaysData={setDaysData} />
        {(config.citizenship ||
          config.boardType ||
          config.startDate ||
          config.days ||
          config.country) && <Summary config={config} daysData={daysData} />}
      </div>
    </div>
  );
};

export default Home;

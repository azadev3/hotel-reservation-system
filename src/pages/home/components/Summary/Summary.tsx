import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import type { Config, DaySelection } from '../../../../types/types';
import { IoDocumentTextOutline } from 'react-icons/io5';
import Configuration from './components/Configuration';
import DailyDetails from './components/DailyDetails';
import { useSummary } from './useSummary';
import SummaryFinal from './components/SummaryFinal';
import { useTranslation } from 'react-i18next';
import Button from '../../../../ui/Button';

interface Props {
  config: Config;
  daysData: DaySelection[];
}

const Summary: React.FC<Props> = ({ config, daysData }) => {
  const { totalPrice } = useSummary({ config, daysData });
  const { t } = useTranslation();
  const summaryRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = () => {
    if (!summaryRef.current) return;

    summaryRef.current.classList.add('pdf-export');

    html2pdf()
      .set({
        margin: 10,
        filename: 'summary.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3, logging: true, dpi: 300, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      })
      .from(summaryRef.current)
      .save()
      .finally(() => {
        summaryRef.current?.classList.remove('pdf-export');
      });
  };

  return (
    <div className="summary">
      <div ref={summaryRef} className="summary">
        <div className="title-container">
          <IoDocumentTextOutline className="icon" />
          <h3>{t('summary.summary')}</h3>
        </div>

        <Configuration config={config} />
        <DailyDetails config={config} daysData={daysData} />
        <SummaryFinal totalPrice={totalPrice} />
      </div>
      <Button title="Export PDF" onClick={handleExportPDF} />
    </div>
  );
};

export default Summary;

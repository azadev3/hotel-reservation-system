import React from 'react';
import { useTranslation } from 'react-i18next';

const TitleContent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="title-content">
      <h1>{t('great_title')}</h1>
      <p>{t('great_text')}</p>
    </div>
  );
};

export default TitleContent;

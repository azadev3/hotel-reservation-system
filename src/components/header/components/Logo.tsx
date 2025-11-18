import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoLogoChrome } from 'react-icons/io5';

const Logo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mock-logo">
      <IoLogoChrome className="logo" />
      <div className="bottom">
        <h2>{t('welcome')}</h2>
        <p>{t('dev_by')}</p>
      </div>
    </div>
  );
};

export default Logo;

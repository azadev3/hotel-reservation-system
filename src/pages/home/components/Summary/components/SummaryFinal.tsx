import React from 'react';
import { useTranslation } from 'react-i18next';

interface PropsSummaryFinal {
  totalPrice: number;
}

const SummaryFinal: React.FC<PropsSummaryFinal> = ({ totalPrice }) => {
  const { t } = useTranslation();
  const [startPriceAnimation, setStartPriceAnimation] = React.useState<boolean>(false);

  React.useEffect(() => {
    setStartPriceAnimation(true);

    const timeout = setTimeout(() => {
      setStartPriceAnimation(false);
    }, 150);

    return () => clearTimeout(timeout);
  }, [totalPrice]);

  return (
    <div className={`summary-final ${totalPrice > 0 ? 'visible' : ''}`}>
      <h3>{t('summary.total_price')}</h3>
      <span className={`totalBox ${startPriceAnimation ? 'actived' : ''}`}>
        ${totalPrice}
      </span>
    </div>
  );
};

export default SummaryFinal;

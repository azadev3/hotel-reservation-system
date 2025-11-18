import React from 'react';
import { useTranslation } from 'react-i18next';

export const useErrorMessage = () => {
  const { t } = useTranslation();
  const [showMsg, setShowMsg] = React.useState<string>('');
  const timeoutRef = React.useRef<number | null>(null);

  const handleError = () => {
    setShowMsg(t("login.error_msg"));

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setShowMsg('');
      timeoutRef.current = null;
    }, 1500);
  };

  return { handleError, showMsg };
};

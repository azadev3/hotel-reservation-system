import React, { type ChangeEvent } from 'react';
import i18n from '../../i18n';
import { Langs } from '../../mock/langs';

export const useLanguage = () => {
  const initialLang = Langs.find(l => l.val === i18n.language) ?? Langs[0];
  const [selectedFlag, setSelectedFlag] = React.useState<string>(initialLang.flag);

  const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const langVal = e.target.value;
    const lang = Langs.find(l => l.val === langVal);
    if (lang) setSelectedFlag(lang.flag);
    i18n.changeLanguage(langVal);
  };

  return { handleChangeLanguage, selectedFlag };
};

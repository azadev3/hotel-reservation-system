import React from 'react';
import { useLanguage } from './useLanguage';
import i18n from '../../i18n';
import { Langs } from '../../mock/langs';

const LanguageDropdown: React.FC = () => {
  const { handleChangeLanguage, selectedFlag } = useLanguage();
  return (
    <div className="language-select-wrapper">
      <img src={selectedFlag} alt="flag" className="language-flag" />
      <select
        value={i18n.language}
        onChange={handleChangeLanguage}
        className="language-dropdown"
      >
        {Langs.map(l => (
          <option key={l.id} value={l.val}>
            {l.val.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;

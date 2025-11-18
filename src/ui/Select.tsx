import React from 'react';
import { useTranslation } from 'react-i18next';

interface SelectFieldProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  htmlFor?: string;
  label: string;
  showLable?: boolean;
  options: { id: number; name: string; key?: string }[];
  valueType?: 'id' | 'name' | 'key';
}

const Select: React.FC<SelectFieldProps> = ({
  showLable = true,
  htmlFor,
  label,
  options,
  valueType = 'name',
  ...rest
}) => {
  const { t } = useTranslation();

  return (
    <div className="select-field-ui">
      {showLable && <label htmlFor={htmlFor ?? ''}>{label}</label>}

      <select id={htmlFor ?? ''} {...rest}>
        <option value="">{`${t('form_section.please_select')} ${label}`}</option>

        {options?.map(opt => (
          <option
            key={opt.id}
            value={valueType === 'id' ? opt.id : valueType === 'key' ? opt.key : opt.name}
          >
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

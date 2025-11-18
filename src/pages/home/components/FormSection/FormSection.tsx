import React, { type ChangeEvent, type SetStateAction } from 'react';
import Select from '../../../../ui/Select';
import CustomDate from '../../../../ui/CustomDate';
import InputField from '../../../../ui/InputField';
import CustomBoardType from '../../../../ui/CustomBoardType';
import type { Config } from '../../../../types/types';
import { getBoardTypes } from '../../../../mock/boardTypes';
import { useTranslation } from 'react-i18next';
import { getCountries } from '../../../../mock/countries';

interface PropsFormSection {
  config: Config;
  setConfig: React.Dispatch<SetStateAction<Config>>;
}

const FormSection: React.FC<PropsFormSection> = ({ config, setConfig }) => {
  const { t } = useTranslation();
  const countries = getCountries(t);
  const boardOptions = getBoardTypes(t);

  const handleChange = (key: string, value: any) => {
    setConfig((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      acceptCharset="UTF-8"
      className="form-section"
    >
      <Select
        value={config.citizenship}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleChange('citizenship', e.target.value)
        }
        label={t('form_section.citizenship')}
        options={countries}
        valueType="key"
      />
      <Select
        value={config.country}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleChange('country', e.target.value)
        }
        label={t('form_section.country')}
        options={countries}
        valueType="key"
      />
      <CustomDate
        value={config.startDate}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChange('startDate', e.target.value)
        }
        label={t('form_section.start_date')}
        htmlFor="startDate"
      />
      <InputField
        placeholder={t('form_section.num_day_pl')}
        type="number"
        label={t('form_section.number_of_days')}
        htmlFor="numberOfDays"
        min={1}
        max={60}
        value={config.days}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChange('days', e.target.value)
        }
      />
      <CustomBoardType
        label={t('form_section.board_types')}
        options={boardOptions}
        value={config.boardType}
        onChange={val => handleChange('boardType', val)}
      />
    </form>
  );
};

export default FormSection;

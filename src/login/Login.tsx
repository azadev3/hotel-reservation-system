import React, { type ChangeEvent } from 'react';
import './style.scss';
import Button from '../ui/Button';
import { useErrorMessage } from './hook/useErrorMessage';
import { useSubmitForm } from './hook/useSubmitForm';
import { useTranslation, Trans } from 'react-i18next';
import LanguageDropdown from '../components/header/LanguageDropdown';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const { handleError, showMsg } = useErrorMessage();
  const { handleMockSubmit, setInput, input } = useSubmitForm();
  const [loadingButton, setLoadingButton] = React.useState<boolean>(false);

  return (
    <div className="login-container">
      <LanguageDropdown />
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        className="mock-form"
        acceptCharset="UTF-8"
      >
        <div className="title-form">
          <div className="top">
            <h1>{t('login.title')}</h1>
            <h3>{t('login.subtitle')}</h3>
            <p>{t("design_msg")}</p>
          </div>
          <p>
            <Trans i18nKey="login.project_by">
              <span>Azad Mirheyderzade</span>
              <span>GlobalSoft</span>
            </Trans>
          </p>
        </div>

        <div className="input-field">
          <div className="field">
            <label htmlFor="name">{t('login.name_label')}</label>
            <input
              type="text"
              id="name"
              value={input}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
              className={showMsg ? 'active' : ''}
              placeholder={t('login.name_placeholder')}
            />
            <span className={`error-msg ${showMsg ? 'active' : ''}`}>
              {showMsg || t('login.error_msg')}
            </span>
          </div>

          <Button
            onClick={() => {
              if (loadingButton) return;

              if (!input.trim()) return handleError();

              setLoadingButton(true);

              setTimeout(() => {
                handleMockSubmit();
                setLoadingButton(false);
              }, 2000);
            }}
            title={loadingButton ? t('login.button.loading') : t('login.button.continue')}
            type="button"
            className={loadingButton ? 'loading-button-ui' : 'button-ui'}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;

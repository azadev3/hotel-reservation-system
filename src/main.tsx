import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.scss';
import './i18n';
import './mobile/responsive.scss';
import { MobileDropdownContextProvider } from './context/MobileDropdownContext';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MobileDropdownContextProvider>
      <App />
    </MobileDropdownContextProvider>
  </BrowserRouter>,
);

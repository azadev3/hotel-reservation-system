import React from 'react';
import './style.scss';
import { useHeader } from './useHeader';
import { useMobile } from '../../mobile/useMobile';
import MobileHeader from './MobileHeader';
import Logo from './components/Logo';
import Right from './components/Right';

const Header: React.FC = () => {
  const { isScrolling } = useHeader();
  const { mobile } = useMobile();

  return (
    <header className={`header-wrapper ${isScrolling ? 'is_scrolling' : ''}`}>
      {mobile ? (
        <MobileHeader />
      ) : (
        <div className="header">
          <Logo />
          <Right />
        </div>
      )}
    </header>
  );
};

export default Header;

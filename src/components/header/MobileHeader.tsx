import React, { useContext } from 'react';
import Logo from './components/Logo';
import { MobileDropdownContext } from '../../context/MobileDropdownContext';
import MobileMenu from './components/MobileMenu';

const MobileHeader: React.FC = () => {
  const ctx = useContext(MobileDropdownContext);
  if (!ctx) return null;

  const { isOpen, toggle, setIsOpen } = ctx;

  return (
    <div className="mobile-header">
      <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      <Logo />
      <div onClick={toggle} className="icon-hamburger">
        <img src="/hamburger-6-svgrepo-com.svg" alt="hamburger-6-svgrepo-com" />
      </div>
    </div>
  );
};

export default MobileHeader;

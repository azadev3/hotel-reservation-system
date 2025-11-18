import React, { type SetStateAction } from 'react';
import Logo from './Logo';
import { IoMdClose } from 'react-icons/io';
import Right from './Right';
import { useHeader } from '../useHeader';
import { Link } from 'react-router-dom';
import type { MockDataHeader } from '../../../types/types';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const { mockDataHeader } = useHeader();
  return (
    <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
      <div className="mobile-menu">
        <div className="head">
          <Logo />
          <IoMdClose onClick={() => setIsOpen(false)} className="close" />
        </div>
        <nav className="nav">
          {mockDataHeader?.map((data: MockDataHeader) => (
            <Link className='nav-link' to="#" key={data.id}>
              {data.title}
            </Link>
          ))}
        </nav>
        <Right />
      </div>
    </div>
  );
};

export default MobileMenu;

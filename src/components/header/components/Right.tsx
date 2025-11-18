import React from 'react';
import { IoIosPerson } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import LanguageDropdown from '../LanguageDropdown';

const Right: React.FC = () => {
  return (
    <div className="right">
      <div className="user">
        <IoIosPerson className="person" />
        <h4>{localStorage.getItem('input_val') ?? ''}</h4>
      </div>
      <IoSettingsSharp className="settings" onClick={() => alert('THIS MOCK! :)))')} />
      <LanguageDropdown />
    </div>
  );
};

export default Right;

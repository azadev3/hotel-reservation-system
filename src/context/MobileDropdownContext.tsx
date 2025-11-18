import React, { useState, type SetStateAction } from 'react';

interface MobileDropdownContextInterface {
  toggle: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const MobileDropdownContext =
  React.createContext<MobileDropdownContextInterface | null>(null);

export const MobileDropdownContextProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prev => !prev);

  return (
    <MobileDropdownContext.Provider value={{ isOpen, toggle, setIsOpen }}>
      {children}
    </MobileDropdownContext.Provider>
  );
};

import React from 'react';
import { useNavigate } from 'react-router-dom';

export const useSubmitForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = React.useState<string>('');

  const handleMockSubmit = () => {
    if (input && input.trim() !== '' && input?.length > 0) {
      navigate('/home');
      localStorage.setItem('input_val', input?.toString());
    }
  };

  return { handleMockSubmit, setInput, input };
};

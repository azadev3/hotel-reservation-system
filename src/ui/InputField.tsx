import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor?: string;
  label: string;
}

const InputField: React.FC<InputFieldProps> = props => {
  return (
    <div className="input-field-ui">
      <label htmlFor={props.htmlFor ?? ''}>{props.label}</label>
      <input id={props.htmlFor ?? ''} {...props} />
    </div>
  );
};

export default InputField;

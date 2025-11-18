import React from 'react';

interface CustomDateProps extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor?: string;
  label: string;
}

const CustomDate: React.FC<CustomDateProps> = props => {
  return (
    <div className="date-field-ui">
      <label htmlFor={props.htmlFor ?? ''}>{props.label}</label>
      <input id={props.htmlFor ?? ''} type="date" {...props} />
    </div>
  );
};

export default CustomDate;

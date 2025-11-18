import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customStyle?: React.CSSProperties;
  icon?: React.ReactNode;
  title: string;
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <button
      className="button-ui"
      style={props.customStyle ? props.customStyle : undefined}
      {...props}
    >
      {props.icon ? props.icon : ''}
      <p>{props.title}</p>
    </button>
  );
};

export default Button;

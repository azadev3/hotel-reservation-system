import React from 'react';

interface BoardTypeOption {
  code: string;
  name: string;
}

interface CustomBoardTypeProps {
  label: string;
  options: BoardTypeOption[];
  value: string;
  onChange: (val: string) => void;
}

const CustomBoardType: React.FC<CustomBoardTypeProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="board-type-field">
      <label className="board-label">{label}</label>
      <div className="board-options">
        {options.map(opt => (
          <label
            key={opt.code}
            className={`board-option ${value === opt.code ? 'selected' : ''}`}
          >
            <input
              type="radio"
              name="boardType"
              value={opt.code}
              checked={value === opt.code}
              onChange={() => onChange(opt.code)}
            />
            {opt.name} ({opt.code})
          </label>
        ))}
      </div>
    </div>
  );
};

export default CustomBoardType;

import { FC } from 'react';
import { sort } from '../../types/postTypes';

interface ISelect {
  value: sort;
  defaultValue: string;
  options: Array<{ name: string; value: string }>;
  onChange: (value: sort) => void;
}

const CustomSelect: FC<ISelect> = ({
  value,
  defaultValue,
  options,
  onChange,
}) => {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value as sort)}
    >
      <option value="">{defaultValue}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;

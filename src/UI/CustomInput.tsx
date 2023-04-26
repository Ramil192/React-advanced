import React, { FC } from 'react';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput: FC<IInput> = ({ ...props }) => {
  return (
    <input
      className="w-full px-1 py-2 border border-green-600 m-0"
      {...props}
    />
  );
};

export default CustomInput;

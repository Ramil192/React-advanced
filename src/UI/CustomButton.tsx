import { FC } from 'react';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children: React.ReactNode;
}

const CustomButton: FC<IButton> = ({ children, ...props }) => {
  return (
    <button
      className="px-1 py-2 text-sm border border-green-600 text-green-600"
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;

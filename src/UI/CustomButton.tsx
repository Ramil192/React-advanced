import { FC } from 'react';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children: React.ReactNode;
  extensionClass?: string;
}

const CustomButton: FC<IButton> = ({ children, extensionClass, ...props }) => {
  return (
    <button
      className={`px-1 py-2 text-sm border border-green-600 text-green-600 h-max ${extensionClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;

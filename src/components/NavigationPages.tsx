import { FC } from 'react';
import CustomButton from '../UI/CustomButton';

interface INavigationPages {
  pages: number[];
  currentPage: number;
  changePage: (value: number) => void;
}

const NavigationPages: FC<INavigationPages> = ({
  pages,
  currentPage,
  changePage,
}) => {
  return (
    <div className="text-center mb-5">
      {pages.map((page) => (
        <CustomButton
          extensionClass={`px-3 m-1 ${
            page === currentPage ? 'border-red-700' : ''
          }`}
          key={page}
          onClick={() => {
            changePage(page);
          }}
        >
          {page}
        </CustomButton>
      ))}
    </div>
  );
};

export default NavigationPages;

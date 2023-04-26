import { FC } from 'react';
import CustomInput from '../../../UI/CustomInput';
import { sort } from '../types/postTypes';
import CustomSelect from './UI/CustomSelect';

const sortData = {
  defaultValue: 'Сортировка по умолчанию',
  options: [
    { value: 'title', name: 'Сортировка по названию' },
    { value: 'body', name: 'Сортировка по описанию' },
  ],
};

interface IPostSort {
  selectedSort: sort;
  changeSort: (value: sort) => void;
  querySort: string;
  changeQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PostSort: FC<IPostSort> = ({
  selectedSort,
  changeSort,
  querySort,
  changeQuery,
}) => {
  return (
    <div className="my-3.5">
      <CustomInput
        placeholder="Поиск"
        value={querySort}
        onChange={changeQuery}
      />
      <CustomSelect
        value={selectedSort}
        onChange={changeSort}
        options={sortData.options}
        defaultValue={sortData.defaultValue}
      />
    </div>
  );
};

export default PostSort;

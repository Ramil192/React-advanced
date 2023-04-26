import { FC } from 'react';

interface IList {
  mockData: Array<{ title: string; lists: string[] }>;
}

const List: FC<IList> = ({ mockData }) => {
  return (
    <>
      {mockData.map((mock, index) => (
        <ul className="font-medium text-lg" key={index}>
          {mock.title}
          {mock.lists.map((itemList, index) => (
            <li className="font-normal ml-3" key={index}>
              {itemList}
            </li>
          ))}
        </ul>
      ))}
    </>
  );
};

export default List;

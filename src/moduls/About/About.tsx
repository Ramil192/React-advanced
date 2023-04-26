import { FC } from 'react';
import List from '../../components/List';
import { mockAbout } from './mockData';

const About: FC = () => {
  return (
    <div className="max-w-lg mx-auto mt-2 ">
      <h2 className="font-medium text-lg text-center mb-2">О приложений</h2>
      <List mockData={mockAbout} />
    </div>
  );
};

export default About;

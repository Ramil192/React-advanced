import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import { publicRouts } from './routs';

const MainRout: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {publicRouts.map((item, index) => (
          <Route path={item.path} element={item.element} key={index} />
        ))}
      </Route>
    </Routes>
  );
};

export default MainRout;

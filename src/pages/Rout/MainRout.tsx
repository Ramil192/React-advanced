import { FC, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Layout from '../Layout';
import { privetRouts, publicRouts } from './routs';

const MainRout: FC = () => {
  const { isAuth } = useContext(AuthContext);
  const routes = isAuth ? privetRouts : publicRouts;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((item, index) => (
          <Route path={item.path} element={item.element} key={index} />
        ))}
      </Route>
    </Routes>
  );
};

export default MainRout;

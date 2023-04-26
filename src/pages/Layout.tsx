import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout: FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-slate-700 text-white">
        <NavBar />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;

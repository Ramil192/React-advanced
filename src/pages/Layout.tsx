import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
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
      <footer className="bg-slate-700 text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

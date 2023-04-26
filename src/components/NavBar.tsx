import { FC } from 'react';
import { Link } from 'react-router-dom';

const NavBar: FC = () => {
  return (
    <header className="bg-slate-700 text-white">
      <div className="max-w-lg mx-auto grid grid-cols-7 gap-x-3 rtl-grid">
        <Link to={'/about'}>About</Link>
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/'}>Home</Link>
      </div>
    </header>
  );
};

export default NavBar;

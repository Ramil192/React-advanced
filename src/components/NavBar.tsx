import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const NavBar: FC = () => {
  const { setIsAuth } = useContext(AuthContext);

  const signOut = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="max-w-lg mx-auto grid grid-cols-navBar gap-x-3">
      <div>
        <button onClick={signOut}>Выйти</button>
      </div>

      <Link to={'/about'}>About</Link>
      <Link to={'/posts'}>Posts</Link>
    </div>
  );
};

export default NavBar;

import { Navigate } from 'react-router-dom';
import About from '../../moduls/About/About';
import Login from '../../moduls/Login/Login';
import MainPost from '../../moduls/Posts';
import MainPostDetails from '../../moduls/Posts/PostDetails';

export const privetRouts = [
  { path: 'posts', element: <MainPost /> },
  { path: 'posts/:id', element: <MainPostDetails /> },
  { path: 'about', element: <About /> },
  { path: '/', element: <Navigate to="about" /> },
  { path: '*', element: <Navigate to="about" /> },
];
export const publicRouts = [
  { path: '/', element: <Login /> },
  { path: '*', element: <Navigate to="/" /> },
];

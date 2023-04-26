import { Navigate } from 'react-router-dom';
import Login from '../../moduls/Login/Login';
import MainPost from '../../moduls/Posts';
import MainPostDetails from '../../moduls/Posts/PostDetails';

export const privetRouts = [
  { path: 'posts', element: <MainPost /> },
  { path: 'posts/:id', element: <MainPostDetails /> },
  { path: '*', element: <Navigate to="/" /> },
];
export const publicRouts = [
  { path: '/', element: <Login /> },
  { path: '*', element: <Navigate to="/" /> },
];

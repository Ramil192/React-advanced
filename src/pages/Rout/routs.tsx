import { Navigate } from 'react-router-dom';
import MainPost from '../../moduls/Posts';
import MainPostDetails from '../../moduls/Posts/PostDetails';

export const publicRouts = [
  { path: 'posts', element: <MainPost /> },
  { path: 'posts/:id', element: <MainPostDetails /> },
  { path: '*', element: <Navigate to="/" /> },
];

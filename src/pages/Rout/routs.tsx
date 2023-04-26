import { Navigate } from 'react-router-dom';
import MainPost from '../../moduls/Posts'

export const publicRouts = [
  { path: 'posts', element: <MainPost /> },
  { path: '*', element: <Navigate to="/" /> },
];

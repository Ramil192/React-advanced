import { FC } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import PostDetails from './PostDetails';

const storePosts = setupStore();

const MainPostDetails: FC = () => {
  return (
    <Provider store={storePosts}>
      <PostDetails />
    </Provider>
  );
};

export default MainPostDetails;

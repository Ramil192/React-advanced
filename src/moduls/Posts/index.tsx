import { FC } from 'react';
import { Provider } from 'react-redux';
import Posts from './Posts';
import { setupStore } from './store/store';
const storePosts = setupStore();

const MainPost: FC = () => {
  return (
    <Provider store={storePosts}>
      <Posts />
    </Provider>
  );
};

export default MainPost;

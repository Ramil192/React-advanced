import { Provider } from 'react-redux';
import Posts from './moduls/Posts/Posts';
import { setupStore } from './moduls/Posts/store/store';

const storePosts = setupStore();
function App() {
  return (
    <div className="">
      <Provider store={storePosts}>
        <Posts title="Список Постов" />
      </Provider>
    </div>
  );
}

export default App;

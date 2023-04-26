import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Posts from './moduls/Posts/Posts';
import { setupStore } from './moduls/Posts/store/store';

const storePosts = setupStore();
function App() {
  return (
    <div className="">
      <Provider store={storePosts}>
        <Routes>
          <Route path="/" element={<Posts title="Список Постов"/>} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

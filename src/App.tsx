import AuthProvider from './context/AuthProvider';
import MainRout from './pages/Rout/MainRout';

function App() {
  return (
    <AuthProvider>
      <MainRout />;
    </AuthProvider>
  );
}

export default App;

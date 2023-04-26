import { FC, FormEvent, useContext } from 'react';
import CustomButton from '../../UI/CustomButton';
import CustomInput from '../../UI/CustomInput';
import { AuthContext } from '../../context/AuthProvider';
import { CustomForm, IUser } from './types/loginTypes';

const Login: FC = () => {
  const { setIsAuth } = useContext(AuthContext);

  const createNewPost = (event: FormEvent<CustomForm>) => {
    event.preventDefault();

    const inputs = event.currentTarget.elements;

    const tempNewUser: IUser = {
      login: inputs.login.value,
      password: inputs.password.value,
    };

    inputs.login.value = '';
    inputs.password.value = '';
    localStorage.setItem('auth', JSON.stringify(tempNewUser));
    setIsAuth(true);
  };

  return (
    <div className="max-w-lg mx-auto pt-2">
      <form
        className="h-52 flex flex-col justify-between"
        onSubmit={createNewPost}
      >
        <h2 className="text-3xl font-medium text-center pb-2">
          Страница для логина
        </h2>

        <CustomInput name="login" placeholder="Логин" required type="email" />
        <CustomInput
          name="password"
          placeholder="Пароль"
          required
          type="password"
        />
        <CustomButton style={{ width: 'max-content' }}>
          Регистрация
        </CustomButton>
      </form>
    </div>
  );
};

export default Login;

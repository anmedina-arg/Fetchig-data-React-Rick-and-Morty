import LoginForm from '../components/loginForm/loginForm';
import NavigateButton from '../components/ui/button/navigateButton';

const LoginPage = () => {
  return (
    <>
      <div>hola soy login page</div>
      <LoginForm />
      <NavigateButton label={'Back'} />
    </>
  );
};

export default LoginPage;

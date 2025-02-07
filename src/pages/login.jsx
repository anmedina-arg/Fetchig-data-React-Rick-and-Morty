import LoginForm from '../components/loginForm/loginForm';
import LinkButton from '../components/ui/button/linkButton';

const LoginPage = () => {
  return (
    <>
      <div>hola soy login page</div>
      <LoginForm />
      <LinkButton label={'Back'} />
    </>
  );
};

export default LoginPage;

import RegisterForm from '../components/registerForm/registerForm';
import NavigateButton from '../components/ui/button/navigateButton';

const RegisterPage = () => {
  return (
    <>
      <div>Hola soy register page</div>
      <RegisterForm />
      <NavigateButton label={'Back'} />
    </>
  );
};

export default RegisterPage;

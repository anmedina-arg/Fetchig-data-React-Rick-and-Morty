import RegisterForm from '../components/registerForm/registerForm';
import LinkButton from '../components/ui/button/linkButton';

const RegisterPage = () => {
  return (
    <>
      <div>Hola soy register page</div>
      <RegisterForm />
      <LinkButton label={'Back'} />
    </>
  );
};

export default RegisterPage;

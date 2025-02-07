import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import MainCards from '../components/main';

const Main = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Bienvenido, {user?.username}!</h1>
      <MainCards />
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Main;

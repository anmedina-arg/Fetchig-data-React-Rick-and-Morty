import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import MainCards from '../components/main';
import NavBar from '../components/navbar/navbar';

const Main = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <NavBar />
      <h1>Bienvenido, {user?.username}!</h1>
      <MainCards />
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Main;

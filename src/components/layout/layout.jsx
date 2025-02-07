import { Outlet } from 'react-router';
import NavBar from '../navbar/navbar';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet /> {/* Aquí se renderizarán las rutas hijas */}
    </div>
  );
};

export default Layout;

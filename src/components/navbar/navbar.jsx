import { NavLink } from 'react-router';

const NavBar = () => {
  return (
    <nav>
      <NavLink to={'/main'}>Todos</NavLink>
      <NavLink to={'/character'}>Buscar personaje</NavLink>
    </nav>
  );
};

export default NavBar;

import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/home/home';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
// eslint-disable-next-line no-unused-vars
import AuthProvider, { AuthContext } from './context/authContext';
import ProtectedRoute from './protectedRoute';
import Main from './pages/main';
import Character from './pages/character';
import { useContext } from 'react';
import Layout from './components/layout/layout';

/*
Recuerden que comenzamos haciendo todo en este archivo, pero es una buena práctica, mantener este archivo lo "más limpio" posible.

Entonces luego de verificar que todo funcione bien, podemos extraer en distintos componentes
*/

/*
En esta "evolucion" de este ejercicio, vamos a agregar:

1- Un enrutado con react-router, veremos también enrutado dinámico
2- un contexto, un estado global que simulara una base de datos de usuarios
3- un formulario de registro
4- un formulario de autenticación
5- rutas protegidas

*/

function App() {
  const { users } = useContext(AuthContext);

  console.log('mis usuarios', users);

  return (
    // <AuthProvider>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Grupo de rutas protegidas con Layout */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="main" element={<Main />} />
        <Route path="character" element={<Character />} />
      </Route>
    </Routes>
    // </AuthProvider>
  );
}

export default App;

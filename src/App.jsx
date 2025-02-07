import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import AuthProvider from './context/authContext';
import ProtectedRoute from './protectedRoute';
import Main from './pages/main';
import Character from './pages/character';

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
  return (
    <AuthProvider>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Ruta protegida */}
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
        {/* Ruta protegida */}
        <Route
          path="/character"
          element={
            <ProtectedRoute>
              <Character />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;

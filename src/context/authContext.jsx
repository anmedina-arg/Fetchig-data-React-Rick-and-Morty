import { createContext, useState } from 'react';

// Crear el contexto
export const AuthContext = createContext(null);

const initialUser = {
  id: '10',
  username: 'andres',
  email: 'andres@invalid.com',
  password: '123456',
};

// Proveedor de autenticación
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([initialUser]); // Simula una "base de datos"
  const [user, setUser] = useState(null); // Usuario autenticado

  // Función para registrar usuarios
  const register = (userInput) => {
    if (users.some((u) => u.username === userInput.username)) return; // Evitar duplicados

    const newUser = {
      id: users.length + 1,
      ...userInput,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  // Función para iniciar sesión
  const login = (userLogin) => {
    const existingUser = users.find(
      (u) =>
        u.username === userLogin.username && u.password === userLogin.password
    );

    if (existingUser) {
      setUser(existingUser);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, users, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

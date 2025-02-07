import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const { login, users } = useContext(AuthContext);
  const [userInput, setUserInput] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Para redirigir después del login

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = userInput;

    const existingUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (existingUser) {
      login(existingUser);
      setError('');
      navigate('/main'); // Redirigir a la página principal (o cualquier ruta protegida)
    } else {
      setError('Usuario o contraseña incorrectos');
    }

    setUserInput({ username: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        <input
          id="username"
          name="username"
          type="text"
          value={userInput.username}
          onChange={handleChange}
          placeholder="Usuario"
          required
        />
      </label>

      <label htmlFor="password">
        <input
          id="password"
          name="password"
          type="password"
          value={userInput.password}
          onChange={handleChange}
          placeholder="Contraseña"
          required
        />
      </label>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Ingresar</button>
    </form>
  );
};

export default LoginForm;

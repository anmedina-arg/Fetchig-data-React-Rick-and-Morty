import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const RegisterForm = () => {
  const { register, users } = useContext(AuthContext);

  console.log('todos los usuarios', users);

  const [userInput, setUserInput] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    register(userInput); // Llama a la función register del contexto
    setUserInput({ username: '', email: '', password: '' }); // Limpia los inputs
  };

  console.log('user', userInput);

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

      <label htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          value={userInput.email}
          onChange={handleChange}
          placeholder="Correo"
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

      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegisterForm;

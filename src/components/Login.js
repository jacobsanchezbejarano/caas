import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para redireccionar
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext'; // Asegúrate de importar el contexto correcto

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setState } = useContext(GlobalContext); // Asume que tienes una función para actualizar el estado del usuario
  const navigate = useNavigate(); // Hook para redireccionar después del inicio de sesión

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí iría tu lógica de autenticación, por ejemplo, una llamada a una API
    if (username === 'admin' && password === 'password') {
      setState({ user: { username } }); // Establece el usuario en el contexto
      navigate('/'); // Redirecciona al usuario a la página principal
    } else {
      setError('Nombre de usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="form-style">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} id="formLogin" className="temporal">
        <div>
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
      <div className="register-link temporal">
        <p>¿No tienes una cuenta? <a href="/crearusuario">Registrarse</a></p>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para redireccionar
import { GlobalContext } from '../context/GlobalContext'; // Asegúrate de importar el contexto correcto
import {API_URL} from "../utils/constants";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { updateUser, updateToken, state } = useContext(GlobalContext); // Asume que tienes una función para actualizar el estado del usuario
  const navigate = useNavigate(); // Hook para redireccionar después del inicio de sesión

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Realiza la solicitud POST al servidor
    fetch(API_URL+'/php/ajax/usuarios/ajax.auth.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        option: 'login',
        email: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.status === 'success') {
          // Si la autenticación es exitosa, establece el usuario en el contexto
          updateUser(username);

          localStorage.setItem('emailCaas', username);
          localStorage.setItem('authTokenCaas', data.token);
          updateToken(data.token);

          navigate('/'); // Redirecciona al usuario a la página principal
        } else {
          // Si hay un error, muestra el mensaje de error
          setError('Nombre de usuario o contraseña incorrectos.');
        }
      })
      .catch((error) => {
        console.error('Error al autenticar:', error);
        setError('Error en la solicitud de autenticación.');
      });
  };
  

  return (
    <div className="form-style">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} id="formLogin" className="temporal">
        <div>
          <label htmlFor="username">Email:</label>
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

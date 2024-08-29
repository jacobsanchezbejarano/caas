import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h2>Por favor, inicia sesión</h2>
      <Link to="/login">
        <button>Iniciar sesión</button>
      </Link>
      <Link to="/crearusuario">
        <button>Registrarse</button>
      </Link>
    </div>
  );
};

export default LoginPage;
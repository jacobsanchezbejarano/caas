import React, { useState } from 'react';

const CrearCuenta = () => {
  const [accountName, setAccountName] = useState('');

  const handleInputChange = (event) => {
    setAccountName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para enviar el nombre de la cuenta al backend o a otro lugar
    console.log('Nombre de la nueva cuenta:', accountName);
    
    // Después de enviar, puedes restablecer el valor del input
    setAccountName('');
  };

  return (
    <form className="registro-cuenta" onSubmit={handleSubmit}>
      <section className="nombre-cuenta">
        <h2>CUENTAS EXISTENTES</h2>
        <h3 className="temporal"></h3>
      </section>
      
      <h2>CREAR CUENTA NUEVA</h2>
      <input
        type="text"
        id="cobrar-con"
        name="cobrar-con"
        placeholder="Nombrar nueva cuenta"
        value={accountName}
        onChange={handleInputChange}
        required
      />
      
      <button type="submit">REGISTRAR</button>
    </form>
  );
};

export default CrearCuenta;

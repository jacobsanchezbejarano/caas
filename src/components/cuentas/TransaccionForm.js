import React from 'react';

const TransaccionForm = ({ titulo, cuentaNombre, cuentaNumero, saldoDisponible, cuentasDisponibles, onSubmit }) => {
  return (
    <form className="registro-cuenta" onSubmit={onSubmit}>
      <section className="nombre-cuenta">
        <h2>{cuentaNombre}</h2>
        <h3>{cuentaNumero}</h3>
      </section>
      <section className="disp-saldo">
        <h2>{saldoDisponible}</h2>
        <h3>SALDO</h3>
      </section>

      <label htmlFor="monto">Monto:</label>
      <input type="text" id="monto" name="monto" placeholder="INGRESE EL MONTO" required />

      <label htmlFor="cobrar-con">Cobrar con:</label>
      <select id="cobrar-con" name="cobrar-con" required>
        {cuentasDisponibles.map((cuenta) => (
          <option key={cuenta.id} value={cuenta.id}>{cuenta.nombre}</option>
        ))}
      </select>

      <button type="submit">REGISTRAR</button>
    </form>
  );
};

export default TransaccionForm;

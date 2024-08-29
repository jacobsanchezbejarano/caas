import React from 'react';
import TransaccionForm from './TransaccionForm';

const ActivoTransaccion = () => {
  const cuentasActivas = [
    { id: 'prestamo', nombre: 'Préstamo' },
    { id: 'ingreso', nombre: 'Ingreso' },
    { id: 'aporte', nombre: 'Aporte de Patrimonio' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío de formulario para activos
    console.log('Transacción de activo registrada');
  };

  return (
    <TransaccionForm
      titulo="Registrar Transacción de Activo"
      cuentaNombre="Activo Cuenta"
      cuentaNumero="1000034"
      saldoDisponible="10.000"
      cuentasDisponibles={cuentasActivas}
      onSubmit={handleSubmit}
    />
  );
};

export default ActivoTransaccion;
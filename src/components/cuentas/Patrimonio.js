import React, { useState } from 'react';
import FinancialComponent from './FinancialComponent';
import CategoriaButton from './CategoriaButton';
import CuentaLista from './CuentaLista';
import TransaccionForm from './TransaccionForm';

const Patrimonio = () => {
  // Estado para manejar la categoría seleccionada
  const [selectedCategoria, setSelectedCategoria] = useState('Patrimonio');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAccountNumber, setSelectedAccountNumber] = useState('');
  const [cuentasDisponibles, setCuentasDisponibles] = useState([{ title: 'Caja', accountNumber: '100001', balance: '10000' },
    { title: 'Banco de Crédito', accountNumber: '100002', balance: '10000' },
    { title: 'Test', accountNumber: '100003', balance: '10000' },]);

  const handleButtonClick = (accountNumber) => {
    setSelectedAccountNumber(accountNumber);
    setIsModalOpen(true);
  };
  

  const handleFormSubmit = (data) => {
    // Aquí manejarías la lógica de envío de la transacción
    console.log('Datos del formulario:', data);
    setIsModalOpen(false);
  };
  // Datos de ejemplo para cada categoría
  const categoriasCuentas = {
    Patrimonio: [
      { title: 'Nombre de Cuenta', accountNumber: '100001', balance: '10000' },
      { title: 'Nombre de Cuenta', accountNumber: '100002', balance: '10000' },
      { title: 'Nombre de Cuenta', accountNumber: '100003', balance: '10000' },
    ]
  };

  // Función para manejar el cambio de categoría
  const handleCategoriaClick = (categoria) => {
    setSelectedCategoria(categoria);
  };

  return (
    <FinancialComponent title="Patrimonio">
      <div className="categoria-buttons">
        <CategoriaButton
          label="Patrimonio"
          onClick={() => handleCategoriaClick('Patrimonio')}
          isActive={selectedCategoria === 'Patrimonio'}
        />
      </div>
      <CuentaLista
        title={selectedCategoria}
        cuentas={categoriasCuentas[selectedCategoria]}
        buttonLabel="REGISTRAR"
        onButtonClick={handleButtonClick}
      />
      {isModalOpen && (
        <TransaccionForm
          cuentaNumero={selectedAccountNumber}
          onSubmit={handleFormSubmit}
          cuentasDisponibles={cuentasDisponibles}
        />
      )}
    </FinancialComponent>
  );
};

export default Patrimonio;

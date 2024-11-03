import React, { useState, useContext } from 'react';
import FinancialComponent from './FinancialComponent';
import CategoriaButton from './CategoriaButton';
import CuentaLista from './CuentaLista';
import TransaccionForm from './TransaccionForm';
import { GlobalContext } from '../../context/GlobalContext'; // Asegúrate de importar el contexto correcto

const Pasivos = () => {
  // Estado para manejar la categoría seleccionada
  const [selectedCategoria, setSelectedCategoria] = useState('Pasivos Corrientes');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAccountNumber, setSelectedAccountNumber] = useState('');

  const { state } = useContext(GlobalContext);

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
  const categoriasCuentas = state.accounts.Pasivos;

  // Función para manejar el cambio de categoría
  const handleCategoriaClick = (categoria) => {
    setSelectedCategoria(categoria);
  };

  return (
    <FinancialComponent title="Pasivos Corrientes">
      <div className="categoria-buttons">
        <CategoriaButton
          label="Pasivos Corrientes"
          onClick={() => handleCategoriaClick('Pasivos Corrientes')}
          isActive={selectedCategoria === 'Pasivos Corrientes'}
        />
        <CategoriaButton
          label="Pasivos No Corrientes"
          onClick={() => handleCategoriaClick('Pasivos No Corrientes')}
          isActive={selectedCategoria === 'Pasivos No Corrientes'}
        />
      </div>
      <CuentaLista
        title={selectedCategoria}
        cuentas={categoriasCuentas[selectedCategoria] ?? []}
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

export default Pasivos;

import React, { useState, useContext } from 'react';
import FinancialComponent from './FinancialComponent';
import CategoriaButton from './CategoriaButton';
import CuentaLista from './CuentaLista';
import TransaccionForm from './TransaccionForm';
import { GlobalContext } from '../../context/GlobalContext'; // Asegúrate de importar el contexto correcto

const Costos = () => {
  // Estado para manejar la categoría seleccionada
  const [selectedCategoria, setSelectedCategoria] = useState('Costos');
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
  const categoriasCuentas = state.accounts.Costos;

  // Función para manejar el cambio de categoría
  const handleCategoriaClick = (categoria) => {
    setSelectedCategoria(categoria);
  };

  return (
    <FinancialComponent title="Costos">
      <div className="categoria-buttons">
        <CategoriaButton
          label="Costos"
          onClick={() => handleCategoriaClick('Costos')}
          isActive={selectedCategoria === 'Costos'}
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

export default Costos;

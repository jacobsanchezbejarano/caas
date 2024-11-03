import React, {useState, useContext} from 'react';
import FinancialComponent from './FinancialComponent';
import CategoriaButton from './CategoriaButton';
import CuentaLista from './CuentaLista';
import TransaccionForm from './TransaccionForm';
import { GlobalContext } from '../../context/GlobalContext'; // Asegúrate de importar el contexto correcto

const Patrimonio = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState('Capital');
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

  const handleCategoriaClick = (categoria) => {
    setSelectedCategoria(categoria);
  };

  // Datos de ejemplo para cada categoría
  const categoriasCuentas = {
    'Capital': state.accounts.Patrimonio['Capital'],
    'Resultados': state.accounts.Patrimonio['Resultados'],
    'Reservas': state.accounts.Patrimonio['Reservas'],
    'Ajustes': state.accounts.Patrimonio['Ajustes'],
  };

  return (
    <>
      <FinancialComponent title="Patrimonio Corrientes">
        <CategoriaButton label="Capital" isActive={selectedCategoria === 'Capital'} onClick={() => handleCategoriaClick('Capital')} />
        <CategoriaButton label="Resultados" onClick={() => handleCategoriaClick('Resultados')} />
        <CategoriaButton label="Reservas" onClick={() => handleCategoriaClick('Reservas')} />
        <CategoriaButton label="Ajustes" onClick={() => handleCategoriaClick('Ajustes')} />
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
    </>
  );
};

export default Patrimonio;

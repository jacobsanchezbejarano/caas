import React, {useState} from 'react';
import FinancialComponent from './FinancialComponent';
import CategoriaButton from './CategoriaButton';
import TransaccionForm from './TransaccionForm';

const Activos = () => {

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

  const handleCategoriaClick = (categoria) => {
    console.log(`Categoría seleccionada: ${categoria}`);
  };

  return (
    <>
      <FinancialComponent title="Activos Corrientes">
        <CategoriaButton label="Disponibles" onClick={() => handleCategoriaClick('Disponibles')} />
        <CategoriaButton label="Inv Temporales" onClick={() => handleCategoriaClick('Inv Temporales')} />
        <CategoriaButton label="Exigibles" onClick={() => handleCategoriaClick('Exigibles')} />
        <CategoriaButton label="Realizables" onClick={() => handleCategoriaClick('Realizables')} />
        <CategoriaButton label="Diferidos" onClick={() => handleCategoriaClick('Diferidos')} />
      </FinancialComponent>

      <FinancialComponent title="Activos No Corrientes">
        <CategoriaButton label="Exigibles" onClick={() => handleCategoriaClick('Exigibles')} />
        <CategoriaButton label="Inv Permanentes" onClick={() => handleCategoriaClick('Inv Permanentes')} />
        <CategoriaButton label="Bienes de Uso" onClick={() => handleCategoriaClick('Bienes de Uso')} />
        <CategoriaButton label="Intangibles" onClick={() => handleCategoriaClick('Intangibles')} />
        <CategoriaButton label="Gastos Diferidos" onClick={() => handleCategoriaClick('Gastos Diferidos')} />
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

export default Activos;

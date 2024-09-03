import React, {useState} from 'react';
import FinancialComponent from './FinancialComponent';
import CategoriaButton from './CategoriaButton';
import CuentaLista from './CuentaLista';
import TransaccionForm from './TransaccionForm';

const Activos = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState('Disponibles');
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
    setSelectedCategoria(categoria);
  };

  // Datos de ejemplo para cada categoría
  const categoriasCuentas = {
    Disponibles: [
      { title: 'Nombre de Cuenta', accountNumber: '100001', balance: '10000' },
      { title: 'Nombre de Cuenta', accountNumber: '100002', balance: '10000' },
      { title: 'Nombre de Cuenta', accountNumber: '100003', balance: '10000' },
    ],
    'Inv Temporales': [
      { title: 'Cuenta Extraordinaria', accountNumber: '200001', balance: '50000' },
      { title: 'Cuenta Extraordinaria', accountNumber: '200002', balance: '25000' },
    ],
    'Exigibles': [
      { title: 'Cuenta Extraordinaria', accountNumber: '200001', balance: '50000' },
      { title: 'Cuenta Extraordinaria', accountNumber: '200002', balance: '25000' },
    ],
    'Realizables': [
      { title: 'Cuenta Extraordinaria', accountNumber: '200001', balance: '50000' },
      { title: 'Cuenta Extraordinaria', accountNumber: '200002', balance: '25000' },
    ],
    'Diferidos': [
      { title: 'Cuenta Extraordinaria', accountNumber: '200001', balance: '50000' },
      { title: 'Cuenta Extraordinaria', accountNumber: '200002', balance: '25000' },
    ]
  };

  const categoriasCuentas2 = {
    "NC Exigibles": [
      { title: 'Nombre de Cuenta', accountNumber: '100001', balance: '10000' },
      { title: 'Nombre de Cuenta', accountNumber: '100002', balance: '10000' },
      { title: 'Nombre de Cuenta', accountNumber: '100003', balance: '10000' },
    ],
    'Inv Permanentes': [
      { title: 'Cuenta Extraordinaria', accountNumber: '200001', balance: '50000' },
      { title: 'Cuenta Extraordinaria', accountNumber: '200002', balance: '25000' },
    ],
    'Bienes de Uso': [
      { title: 'Cuenta Extraordinaria', accountNumber: '200001', balance: '50000' },
      { title: 'Cuenta Extraordinaria', accountNumber: '200002', balance: '25000' },
    ],
    'Intangibles': [
      { title: 'Cuenta Extraordinaria', accountNumber: '200001', balance: '50000' },
      { title: 'Cuenta Extraordinaria', accountNumber: '200002', balance: '25000' },
    ],
    'Gastos Diferidos': [
      { title: 'Cuenta Extraordinaria', accountNumber: '200001', balance: '50000' },
      { title: 'Cuenta Extraordinaria', accountNumber: '200002', balance: '25000' },
    ]
  };

  return (
    <>
      <FinancialComponent title="Activos Corrientes">
        <CategoriaButton label="Disponibles" onClick={() => handleCategoriaClick('Disponibles')} />
        <CategoriaButton label="Inv Temporales" onClick={() => handleCategoriaClick('Inv Temporales')} />
        <CategoriaButton label="Exigibles" onClick={() => handleCategoriaClick('Exigibles')} />
        <CategoriaButton label="Realizables" onClick={() => handleCategoriaClick('Realizables')} />
        <CategoriaButton label="Diferidos" onClick={() => handleCategoriaClick('Diferidos')} />
        <CuentaLista
            title={selectedCategoria}
            cuentas={categoriasCuentas[selectedCategoria] ?? []}
            buttonLabel="REGISTRAR"
            onButtonClick={handleButtonClick}
        />
      </FinancialComponent>

      <FinancialComponent title="Activos No Corrientes">
        <CategoriaButton label="Exigibles" onClick={() => handleCategoriaClick('NC Exigibles')} />
        <CategoriaButton label="Inv Permanentes" onClick={() => handleCategoriaClick('Inv Permanentes')} />
        <CategoriaButton label="Bienes de Uso" onClick={() => handleCategoriaClick('Bienes de Uso')} />
        <CategoriaButton label="Intangibles" onClick={() => handleCategoriaClick('Intangibles')} />
        <CategoriaButton label="Gastos Diferidos" onClick={() => handleCategoriaClick('Gastos Diferidos')} />
        <CuentaLista
            title={selectedCategoria}
            cuentas={categoriasCuentas2[selectedCategoria] ?? []}
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

export default Activos;

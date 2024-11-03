import React, {useState, useContext} from 'react';
import FinancialComponent from './FinancialComponent';
import CategoriaButton from './CategoriaButton';
import CuentaLista from './CuentaLista';
import TransaccionForm from './TransaccionForm';
import { GlobalContext } from '../../context/GlobalContext'; // Asegúrate de importar el contexto correcto

const Activos = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState('Disponibles');
  const [selectedCategoria2, setSelectedCategoria2] = useState('Exigibles>1año');
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

  const handleCategoriaClick2 = (categoria) => {
    setSelectedCategoria2(categoria);
  };

  // Datos de ejemplo para cada categoría
  const categoriasCuentas = {
    'Disponibles': state.accounts.Activos['AC Disponibles'],
    'Inversiones Temporales': state.accounts.Activos['AC Inversiones Temporales'],
    'Exigibles': state.accounts.Activos['AC Exigibles'],
    'Realizables': state.accounts.Activos['AC Realizables'],
    'Diferidos': state.accounts.Activos['AC Diferidos'],
  };

  const categoriasCuentas2 = {
    'Exigibles>1año': state.accounts.Activos['ANC Exigibles>1año'],
    'Inversiones permanentes': state.accounts.Activos['ANC Inversiones permanentes'],
    'Bienes de Uso': state.accounts.Activos['ANC Bienes de Uso'],
    'Intangibles': state.accounts.Activos['ANC Intangibles'],
    'Gastos Dieferidos>1Año': state.accounts.Activos['ANC Gastos Dieferidos>1Año'],
  };

  return (
    <>
      <FinancialComponent title="Activos Corrientes">
        <CategoriaButton label="Disponibles" isActive={selectedCategoria === 'Disponibles'} onClick={() => handleCategoriaClick('Disponibles')} />
        <CategoriaButton label="Inversiones Temporalesral" onClick={() => handleCategoriaClick('Inversiones Temporales')} />
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
        <CategoriaButton label="Exigibles>1año" onClick={() => handleCategoriaClick2('Exigibles>1año')} />
        <CategoriaButton label="Inversiones permanentes" onClick={() => handleCategoriaClick2('Inversiones permanentes')} />
        <CategoriaButton label="Bienes de Uso" onClick={() => handleCategoriaClick2('Bienes de Uso')} />
        <CategoriaButton label="Intangibles" onClick={() => handleCategoriaClick2('Intangibles')} />
        <CategoriaButton label="Gastos Dieferidos>1Año" onClick={() => handleCategoriaClick2('Gastos Dieferidos>1Año')} />
        <CuentaLista
            title={selectedCategoria2}
            cuentas={categoriasCuentas2[selectedCategoria2] ?? []}
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

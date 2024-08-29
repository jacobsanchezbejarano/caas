import React, { useState } from 'react';
import FinancialComponent from './FinancialComponent';
import CategoriaButton from './CategoriaButton';
import CuentaLista from './CuentaLista';

const Ingresos = () => {
  // Estado para manejar la categoría seleccionada
  const [selectedCategoria, setSelectedCategoria] = useState('Ingresos');

  // Datos de ejemplo para cada categoría
  const categoriasCuentas = {
    Ingresos: [
      { title: 'Nombre de Cuenta', accountNumber: '100001', balance: '10000' },
      { title: 'Nombre de Cuenta', accountNumber: '100002', balance: '10000' },
      { title: 'Nombre de Cuenta', accountNumber: '100003', balance: '10000' },
    ],
    'Ingresos Extraordinarios': [
      { title: 'Cuenta Extraordinaria', accountNumber: '200001', balance: '50000' },
      { title: 'Cuenta Extraordinaria', accountNumber: '200002', balance: '25000' },
    ],
  };

  // Función para manejar el cambio de categoría
  const handleCategoriaClick = (categoria) => {
    setSelectedCategoria(categoria);
  };

  // Función para manejar el botón de registro
  const handleButtonClick = (accountNumber) => {
    alert(`Registrando en cuenta: ${accountNumber}`);
  };

  return (
    <FinancialComponent title="Ingresos">
      <div className="categoria-buttons">
        <CategoriaButton
          label="Ingresos"
          onClick={() => handleCategoriaClick('Ingresos')}
          isActive={selectedCategoria === 'Ingresos'}
        />
        <CategoriaButton
          label="Ingresos Extraordinarios"
          onClick={() => handleCategoriaClick('Ingresos Extraordinarios')}
          isActive={selectedCategoria === 'Ingresos Extraordinarios'}
        />
      </div>
      <CuentaLista
        title={selectedCategoria}
        cuentas={categoriasCuentas[selectedCategoria]}
        buttonLabel="REGISTRAR"
        onButtonClick={handleButtonClick}
      />
    </FinancialComponent>
  );
};

export default Ingresos;

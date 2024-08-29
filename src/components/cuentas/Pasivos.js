import React, { useState } from 'react';
import FinancialComponent from './FinancialComponent';
import CategoriaButton from './CategoriaButton';
import CuentaLista from './CuentaLista';

const Pasivos = () => {
  // Estado para manejar la categoría seleccionada
  const [selectedCategoria, setSelectedCategoria] = useState('Pasivos Corrientes');

  // Datos de ejemplo para cada categoría
  const categoriasCuentas = {
    "Pasivos Corrientes": [
      { title: 'Nombre de Cuenta', accountNumber: '100001', balance: '10000' },
      { title: 'Nombre de Cuenta', accountNumber: '100002', balance: '10000' },
      { title: 'Nombre de Cuenta', accountNumber: '100003', balance: '10000' },
    ],
    'Pasivos No Corrientes': [
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
        cuentas={categoriasCuentas[selectedCategoria]}
        buttonLabel="REGISTRAR"
        onButtonClick={handleButtonClick}
      />
    </FinancialComponent>
  );
};

export default Pasivos;

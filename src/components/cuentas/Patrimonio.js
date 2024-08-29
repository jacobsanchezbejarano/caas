import React, { useState } from 'react';
import FinancialComponent from './FinancialComponent';
import CategoriaButton from './CategoriaButton';
import CuentaLista from './CuentaLista';

const Patrimonio = () => {
  // Estado para manejar la categoría seleccionada
  const [selectedCategoria, setSelectedCategoria] = useState('Patrimonio');

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

  // Función para manejar el botón de registro
  const handleButtonClick = (accountNumber) => {
    alert(`Registrando en cuenta: ${accountNumber}`);
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
    </FinancialComponent>
  );
};

export default Patrimonio;

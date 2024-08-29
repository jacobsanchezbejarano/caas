import React, { useState } from 'react';
import FinancialComponent from './FinancialComponent';
import CategoriaButton from './CategoriaButton';
import CuentaLista from './CuentaLista';

const Costos = () => {
  // Estado para manejar la categoría seleccionada
  const [selectedCategoria, setSelectedCategoria] = useState('Costos');

  // Datos de ejemplo para cada categoría
  const categoriasCuentas = {
    Costos: [
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
        cuentas={categoriasCuentas[selectedCategoria]}
        buttonLabel="REGISTRAR"
        onButtonClick={handleButtonClick}
      />
    </FinancialComponent>
  );
};

export default Costos;

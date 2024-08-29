import React from 'react';
import FinancialComponent from './FinancialComponent';
import CategoriaButton from './CategoriaButton';

const Activos = () => {
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
      </FinancialComponent>
    </>
  );
};

export default Activos;

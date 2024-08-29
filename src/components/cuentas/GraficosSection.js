import React from 'react';
import Ingresos from './Ingresos';
import Egresos from './Egresos';
import Patrimonio from './Patrimonio';
import CuentasRecientes from './CuentasRecientes';

const GraficosSection = () => {
  return (
    <section className="graficos">
      <h2>GRAFICOS</h2>
      <section className="cuadros">
        <Ingresos />
        <Egresos />
        <Patrimonio />
      </section>
      <CuentasRecientes />
    </section>
  );
};

export default GraficosSection;

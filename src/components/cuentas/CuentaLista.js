import React from 'react';
import PropTypes from 'prop-types';
import CuentaItem from './CuentaItem';

const CuentaLista = ({ title, cuentas, buttonLabel, onButtonClick }) => {
  return (
    <div className="cuenta-list">
      <h2 className="titulo">{title}</h2>
      
      <div className="buttons-container">
        <button className="create-button">CREAR CUENTA</button>
        { cuentas.length > 0 && <button className="view-all-button">VER TODAS</button> }
      </div>
      {cuentas.length > 0 && cuentas.map((cuenta, index) => (
        <CuentaItem
          key={index}
          title={cuenta.title}
          accountNumber={cuenta.accountNumber}
          balance={cuenta.balance}
          buttonLabel={buttonLabel}
          onButtonClick={() => onButtonClick(cuenta.accountNumber)}
        />
      ))}
    </div>
  );
};

CuentaLista.propTypes = {
  title: PropTypes.string.isRequired,
  cuentas: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      accountNumber: PropTypes.string.isRequired,
      balance: PropTypes.string.isRequired,
    })
  ).isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default CuentaLista;

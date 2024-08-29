import React from 'react';
import PropTypes from 'prop-types';

const CuentaItem = ({ title, accountNumber, balance, buttonLabel, onButtonClick }) => {
  return (
    <div className="cuenta-item">
      <div className="nombre-cuenta">
        <h2>{title}</h2>
        <h3>{accountNumber}</h3>
      </div>
      <div className="saldo">
      <h6>Saldo</h6>
      <h2> {balance} BS</h2>
      </div>
      <button className="cuenta-button" onClick={onButtonClick}>{buttonLabel}</button>
    </div>
  );
};

CuentaItem.propTypes = {
  title: PropTypes.string.isRequired,
  accountNumber: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default CuentaItem;

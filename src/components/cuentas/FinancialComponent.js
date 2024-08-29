import React from 'react';
import PropTypes from 'prop-types';

const FinancialComponent = ({ title, children, style, onClick }) => {
  return (
    <div style={{ ...defaultStyle, ...style }} onClick={onClick}>
      <h2>{title}</h2>
      <div className="categorias-record">{children}</div>
    </div>
  );
};

const defaultStyle = {
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  margin: '10px 0',
  backgroundColor: '#f9f9f9',
};

FinancialComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default FinancialComponent;

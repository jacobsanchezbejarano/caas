import React from 'react';
import PropTypes from 'prop-types';

const CategoriaButton = ({ label, onClick, isActive }) => {
  return (
    <button
      className={`categoria-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

CategoriaButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

CategoriaButton.defaultProps = {
  isActive: false,
};

export default CategoriaButton;

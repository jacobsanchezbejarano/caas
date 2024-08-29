import React from 'react';
import { useNavigate } from 'react-router-dom';

const Volver = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navega hacia atrás en la historia
  };

  return (
    <button onClick={handleBackClick} className="back-button">
      ← Volver
    </button>
  );
};

export default Volver;
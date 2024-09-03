import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext'; // Asegúrate de importar el contexto correcto

const CerrarSesion = () => {
    const { updateUser, updateToken } = useContext(GlobalContext);
    useEffect(
        ()=>{
            updateUser(null);
            updateToken(null);
            localStorage.removeItem('emailCaas');
            localStorage.removeItem('authTokenCaas');
        },[]
    )
    return (
        <div>
            <h2>Se cerró tu sesión</h2>
        </div>
    );
};

export default CerrarSesion;

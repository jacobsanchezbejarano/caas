import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext'; // Asegúrate de importar el contexto correcto

const CerrarSesion = () => {
    const { updateUser } = useContext(GlobalContext);
    useEffect(
        ()=>{
            updateUser({ user: null });
        },[]
    )
    return (
        <div>
            <h2>Se cerró tu sesión</h2>
        </div>
    );
};

export default CerrarSesion;

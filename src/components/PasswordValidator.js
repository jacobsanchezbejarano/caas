import React, { useState, useContext, useEffect } from 'react';
import passwordTranslations from '../languages/password.json'; // Importa el archivo JSON
import { GlobalContext } from '../context/GlobalContext';

function PasswordValidator({ onPasswordChange, onErrorsChange }) {
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const { state } = useContext(GlobalContext);

    // Función para validar la contraseña (en el frontend)
    const validarSeguridadContrasena = (password) => {
        const errores = [];

        if (password.length < 8) {
            errores.push('ERROR_LONGITUD_MINIMA');
        }

        if (!/[A-Z]/.test(password)) {
            errores.push('ERROR_LETRA_MAYUSCULA');
        }

        if (!/[a-z]/.test(password)) {
            errores.push('ERROR_LETRA_MINUSCULA');
        }

        if (!/[0-9]/.test(password)) {
            errores.push('ERROR_NUMERO');
        }

        if (!/[\W]/.test(password)) {
            errores.push('ERROR_CARACTER_ESPECIAL');
        }

        return errores;
    };

    const handlePasswordChange = (e) => {
        const nuevaContrasena = e.target.value;
        setPassword(nuevaContrasena);
        const erroresValidacion = validarSeguridadContrasena(nuevaContrasena);
        setErrors(erroresValidacion);
        onPasswordChange(nuevaContrasena); // Llama a la función de callback con la nueva contraseña
        onErrorsChange(erroresValidacion); // Llama a la función de callback con los errores de validación
    };

    return (
        <div>
            <label htmlFor="password">Contraseña:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
            />
            {errors.length > 0 && (
                <div style={{ color: 'var(--accent2-color)' }}>
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>{passwordTranslations[state.language][error]}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default PasswordValidator;

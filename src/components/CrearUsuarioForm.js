import React, { useState, useContext } from 'react';
import PasswordValidator from './PasswordValidator'; // Ajusta la ruta según tu estructura de proyecto
import { GlobalContext } from '../context/GlobalContext';
import passwordTranslations from '../languages/iniciosesion.json'; // Importa el archivo JSON

import {API_URL} from "../utils/constants";

function CrearUsuarioForm() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErrors, setPasswordErrors] = useState([]);
    const { state, updateTheme } = useContext(GlobalContext);

    const handlePasswordChange = (newPassword) => {
        setPassword(newPassword);
    };

    // Función de callback para recibir errores del componente hijo
    const handleErrorsChange = (validationErrors) => {
        setPasswordErrors(validationErrors);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar si hay errores antes de enviar el formulario
        if (passwordErrors.length > 0) {
            alert(passwordTranslations[state.language]['CORREGIR_CONTRASENA']);
            return;
        }

        // Llamada fetch para enviar datos al servidor
        fetch(API_URL+'/php/ajax/usuarios/ajax.crearusuario.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                option: 'crearUsuario',
                nombre: nombre,
                apellido: apellido,
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert(result.message);
                // Limpiar el formulario
                setNombre('');
                setApellido('');
                setEmail('');
                setPassword('');
                setPasswordErrors([]);
            } else {
                alert(result.message);
            }
        })
        .catch(() => {
            alert(passwordTranslations[state.language]['ERROR_CREACION_USUARIO']);
        });
    };

    return (
        <div className="form-style">
            <form id="formCrearUsuario" className="temporal" onSubmit={handleSubmit}>
                <h2>{passwordTranslations[state.language]['CREAR_USUARIO']}</h2>
                
                <div>
                    <label htmlFor="nombre">{passwordTranslations[state.language]['NOMBRE']}:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="apellido">{passwordTranslations[state.language]['APELLIDO']}:</label>
                    <input 
                        type="text" 
                        id="apellido" 
                        name="apellido" 
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email">{passwordTranslations[state.language]['EMAIL']}:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <PasswordValidator idioma={state.language} 
                        onPasswordChange={handlePasswordChange} 
                        onErrorsChange={handleErrorsChange} />
                </div>
                <button type="submit">{passwordTranslations[state.language]['CREAR_USUARIO']}</button>
            </form>
        </div>
    );
}

export default CrearUsuarioForm;

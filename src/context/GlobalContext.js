import React, { createContext, useState, useEffect } from 'react';
import {API_URL} from "../utils/constants";

// Crea el contexto
const GlobalContext = createContext();

// Crea un proveedor para el contexto
const GlobalProvider = ({ children }) => {
    const [state, setState] = useState({
        user: localStorage.getItem('emailCaas') ?? null,
        token: localStorage.getItem('authTokenCaas') ?? null,
        theme: 'light',
        language: 'en',
        accounts: null,
    });

    // Función para actualizar el usuario
    const updateUser = (user) => setState(prevState => ({ ...prevState, user }));
    const updateToken = (token) => setState(prevState => ({ ...prevState, token }));

    // Función para actualizar el tema
    const updateTheme = (theme) => setState(prevState => ({ ...prevState, theme }));

    // Función para actualizar el idioma
    const updateLanguage = (language) => setState(prevState => ({ ...prevState, language }));

    // Función para actualizar cuentas
    const updateAccounts = (accounts) => setState(prevState => ({ ...prevState, accounts }));

    // Puedes agregar efectos secundarios aquí si necesitas cargar datos basados en el idioma
    useEffect(() => {
        // Código para manejar la carga de recursos basados en el idioma, si es necesario
    }, [state.language]);

    useEffect(() => {
        const token = localStorage.getItem('authTokenCaas');
        fetch(API_URL+'/php/ajax/contabilidad_personal/ajax.cuentas.php', {
            method: 'POST',
            headers: {
            'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                option: 'obtenerCuentasClasificadas',
              }),
        })
        .then((response) => response.json())
      .then((data) => {
            updateAccounts(data.data); // Procesa la respuesta del servidor
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
    }, []);

    return (
        <GlobalContext.Provider value={{ state, updateUser, updateToken, updateTheme, updateLanguage, updateAccounts }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };
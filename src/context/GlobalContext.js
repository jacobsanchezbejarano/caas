import React, { createContext, useState, useEffect } from 'react';

// Crea el contexto
const GlobalContext = createContext();

// Crea un proveedor para el contexto
const GlobalProvider = ({ children }) => {
    const [state, setState] = useState({
        user: localStorage.getItem('emailCaas') ?? null,
        token: localStorage.getItem('authTokenCaas') ?? null,
        theme: 'light',
        language: 'en',
    });

    // Función para actualizar el usuario
    const updateUser = (user) => setState(prevState => ({ ...prevState, user }));
    const updateToken = (token) => setState(prevState => ({ ...prevState, token }));

    // Función para actualizar el tema
    const updateTheme = (theme) => setState(prevState => ({ ...prevState, theme }));

    // Función para actualizar el idioma
    const updateLanguage = (language) => setState(prevState => ({ ...prevState, language }));

    // Puedes agregar efectos secundarios aquí si necesitas cargar datos basados en el idioma
    useEffect(() => {
        // Código para manejar la carga de recursos basados en el idioma, si es necesario
    }, [state.language]);

    return (
        <GlobalContext.Provider value={{ state, updateUser, updateToken, updateTheme, updateLanguage }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };
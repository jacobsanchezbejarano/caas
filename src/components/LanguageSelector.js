import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
function LanguageSelector() {
    const { state, updateLanguage } = useContext(GlobalContext);

    const handleLanguageChange = (event) => {
        updateLanguage(event.target.value);
    };

    return (
        <div>
            <h1>Select Language</h1>
            <select value={state.language} onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                {/* Agrega más opciones según sea necesario */}
            </select>
        </div>
    );
}

export default LanguageSelector;

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function ThemeSwitcher() {
    const { state, updateTheme } = useContext(GlobalContext);

    return (
        <div>
            <h1>Theme Switcher</h1>
            <p>Current theme: {state.theme}</p>
            <button onClick={() => updateTheme(state.theme === 'light' ? 'dark' : 'light')}>
                Toggle Theme
            </button>
        </div>
    );
}

export default ThemeSwitcher;

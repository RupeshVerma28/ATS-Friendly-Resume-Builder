import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors"
        >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
};

export default ThemeToggle; 
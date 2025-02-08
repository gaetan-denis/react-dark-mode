import { pages } from '../config.ts';
import Navbar from "./components/Navbar.tsx";
import './styles/reset.css';
import './styles/App.css';
import { createContext, useEffect, useState } from "react";

// Définition du type pour le contexte du thème
interface ThemeContextType {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

// Création du contexte avec une valeur par défaut
export const ThemeContext = createContext<ThemeContextType>({
    isDarkTheme: false,
    toggleTheme: () => {},
});

function App() {
    // Récupère la préférence de thème depuis le localStorage
    const storedTheme = localStorage.getItem('theme');
    const [isDarkTheme, setDarkTheme] = useState<boolean>(
        storedTheme === 'dark' ? true : false
    );

    const toggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
    };

   useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            <Navbar pages={pages} />
        </ThemeContext.Provider>
    );
}

export default App;

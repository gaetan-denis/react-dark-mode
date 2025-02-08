// src/App.tsx

import { pages } from '../config.ts';
import Navbar from "./components/Navbar.tsx";
import './styles/reset.css';
import './styles/App.css';
import { createContext } from "react";
import useTheme from './hooks/useTheme';


interface ThemeContextType {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}


export const ThemeContext = createContext<ThemeContextType>({
    isDarkTheme: false,
    toggleTheme: () => {},
});

function App() {

    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            <Navbar pages={pages} />
        </ThemeContext.Provider>
    );
}

export default App;

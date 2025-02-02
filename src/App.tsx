import {pages} from '../config.ts';
import Navbar from "./components/Navbar.tsx";
import './styles/reset.css';
import './styles/App.css';
import {createContext, useEffect, useState} from "react";


interface ThemeContextType {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {

    const [isDarkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme);
    }

    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');




        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkTheme]);


    return (
        <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
            <Navbar pages={pages}/>
        </ThemeContext.Provider>

    )
}

export default App

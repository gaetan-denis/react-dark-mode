import { useState, useEffect } from "react";

const useTheme = () => {

    const storedTheme = localStorage.getItem("theme");


    const [isDarkTheme, setDarkTheme] = useState<boolean>(storedTheme === "dark");

    const toggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
    };

    
    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkTheme]);

    return { isDarkTheme, toggleTheme };
};

export default useTheme;

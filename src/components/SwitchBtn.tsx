import '../styles/switchbtn.css'
import {ThemeContext} from '../App';
import {useContext} from "react";
const SwitchBtn = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        return <p>Erreur : le contexte du thème n'est pas disponible.</p>;
    }

    const { isDarkTheme, toggleTheme } = context;
    return (

        <button onClick={toggleTheme}>
            {isDarkTheme ? "Passer au thème clair" : "Passer au thème sombre"}
        </button>

    )
}

export default SwitchBtn;
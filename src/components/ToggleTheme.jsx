import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

function ToggleTheme() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <button className="toggle-theme" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    );
}

export default ToggleTheme;
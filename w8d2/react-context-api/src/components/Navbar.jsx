import { NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';
import { LanguageContext } from '../context/language.context'
 
function Navbar() {
    const { theme, setTheme, toggleTheme } = useContext(ThemeContext);
    const { language, setLanguage } = useContext(LanguageContext);
    console.log('language', language)

  return (
    <nav className={`Navbar ${theme}`}>
      <div>
        <NavLink to="/"> {language === 'en-US' ? "Home" : "Maison"} </NavLink>
        <NavLink to="/projects"> {language === 'en-US' ? "Projects" : "Projets"} </NavLink>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light' ? 'dark ' : 'light '}
      </button>
    </nav>
  );
}
 
export default Navbar;
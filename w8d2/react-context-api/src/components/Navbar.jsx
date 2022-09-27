import { NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';
 
function Navbar() {
    const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className={`Navbar ${theme}`}>
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>
    </nav>
  );
}
 
export default Navbar;
import { Link } from 'react-router-dom'; // also { NavLink}

function Navbar() {
    return (
      <nav className="Navbar">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/projects"}>Projects</Link></li>
        </ul>
      </nav>
    );
  }
   
  export default Navbar;
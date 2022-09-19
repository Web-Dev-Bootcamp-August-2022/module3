import IronhackLogo from '../../images/ironhack-logo.png';
import HamburgerLogo from '../../images/hamburger-menu.png';

function Header(){
    return (
        <header>
            <img src={IronhackLogo} alt="ironhack_logo" />
            <img src={HamburgerLogo} alt="hamburger_logo" />
        </header>
    )
}

export default Header;

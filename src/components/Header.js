import './Header.css';
import Logo from '../images/Logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" />
      <nav className="header--nav">
        <ul>
          <li>How We Work</li>
          <li>Services</li>
          <li>Free Quote</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

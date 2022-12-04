import './Header.css';
import Logo from '../images/Logo.svg';

function Header() {
  return (
    <header className="header grid grid-cols-12 gap-y-5 lg:gap-y-0">
      <img className="col-span-12 md:col-span-4" src={Logo} alt="Logo" />
      <nav className="col-span-12 md:col-span-8 header--nav flex items-center lg:text-center">
        <ul className="header--list grid grid-cols-4 gap-y-5 lg:gap-y-0 lg:gap-x-10">
          <li className="col-span-4 lg:col-span-1">How We Work</li>
          <li className="col-span-4 lg:col-span-1">Services</li>
          <li className="col-span-4 lg:col-span-1">Free Quote</li>
          <li className="col-span-4 lg:col-span-1">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

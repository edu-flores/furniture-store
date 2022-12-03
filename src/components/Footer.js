import './Footer.css';
import Logo from '../images/Logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer--column">
        <img src={Logo} alt="Logo" />
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page whenters.
        </p>
        <i className="footer--icon fa-brands fa-twitter"></i>
        <i className="footer--icon fa-brands fa-square-facebook"></i>
        <i className="footer--icon fa-brands fa-instagram"></i>
      </div>
      <div className="footer--column">
        <h3>About Us</h3>
        <ul className="footer--list">
          <li>About</li>
          <li>Privacy & Policy</li>
          <li>Terms & Conditions</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="footer--column">
      <h3>Navigate</h3>
        <ul className="footer--list">
          <li>How We Work</li>
          <li>Services</li>
          <li>FAQ</li>
          <li>Contact</li>
          <li>Free Quote</li>
        </ul>
      </div>
      <div className="footer--column">
      <h3>Contact Us</h3>
        <ul className="footer--list">
          <li>Ricardo Margain 444</li>
          <li>Call: +52 81 1234 5678</li>
          <li>Email: info@challenge.com</li>
        </ul>
        <button className="footer--button" type="button">
          <i className="fa-brands fa-whatsapp fa-2x"></i>
          <span>WhatsApp</span>
          </button>
      </div>
    </footer>
  );
}

export default Footer;

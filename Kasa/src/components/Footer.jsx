import whiteLogo from '../assets/LOGO_blanc.svg'
import '../assets/css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src={whiteLogo} alt="Logo" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

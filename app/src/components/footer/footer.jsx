import './footer.css';
import currency from './../../images/currency.png';
import twt from './../../images/twt.png';
import fb from './../../images/fb.png';
import ig from './../../images/ig.png';
import logo from './../../images/logo.svg';
const Footer = () => {
    return (
        <footer className="footer">
      <img src={currency} alt="Currency" className="footer-image"/>
      <div classname='social'>
        <img src={fb} alt="Facebook" className="footer-media"/>
        <img src={ig} alt="Instagram" className="footer-media"/>
        <img src={twt} alt="Twitter" className="footer-media"/>
        </div>
        <hr className="line" />
          <div className="footer-logo">
            <img src={logo} alt="Logo" className="logo"/>
          </div>
    </footer>
    );
}

export default Footer;
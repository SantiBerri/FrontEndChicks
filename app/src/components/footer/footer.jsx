import './footer.css';
import currency from './../../images/currency.png';
const Footer = () => {
    return (
        <footer className="footer">
      <img src={currency} alt="Currency" className="footer-image"/>
    </footer>
    );
}

export default Footer;
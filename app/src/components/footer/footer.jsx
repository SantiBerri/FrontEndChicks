import './footer.css';
import currency from './../../images/currency.png';
import twt from './../../images/twt.png';
import fb from './../../images/fb.png';
import ig from './../../images/ig.png';
import logo from './../../images/logo.svg';
import stars from './../../images/stars.png';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-top">
                <img src={currency} alt="Payment Methods" className="footer-image" />
            </div>
            <div className="footer-social">
                <img src={fb} alt="Facebook" className="footer-media" />
                <img src={ig} alt="Instagram" className="footer-media" />
                <img src={twt} alt="Twitter" className="footer-media" />
            </div>

            <hr className="line" />

            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="ChicksGold Logo" className="footer-logo-image" />
                    <p className="footer-email">support@chicksgold.com</p>
                </div>
                <div className="footer-links">
                    <div className="footer-section">
                        <h4>Chicks Gold</h4>
                        <ul>
                            <li><button>Games</button></li>
                            <li><button>About Us</button></li>
                            <li><button>Blog</button></li>
                            <li><button>Sitemap</button></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><button>Contact Us</button></li>
                            <li><button>FAQ</button></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><button>Privacy Policy</button></li>
                            <li><button>Terms of Service</button></li>
                            <li><button>Copyright Policy</button></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-review">
                    <img src={stars} alt="Trustpilot" className="trustpilot" />
                    <span>Trustpilot Reviews</span>
                </div>
            </div>

            <div className="footer-copyright">
                <p>© 2017 - 2020 ChicksGold.com. All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;

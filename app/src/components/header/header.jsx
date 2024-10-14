import React from 'react'
import './header.css'
import logo from './../../images/logo.svg'
const Header = () => {
  return (
    <div>
      <div className='header'>
        <img className="logo" alt="logo" src={logo} />
        <ul className="nav-links">
          <li>
            <span>
              Currency 
              <i className="dropdown-arrow"></i>
            </span>
          </li>
          <li>
            <span>
              Items 
              <i className="dropdown-arrow"></i>
            </span>
          </li>
          <li>
            <span>
              Accounts 
              <i className="dropdown-arrow"></i>
            </span>
          </li>
          <li>
            <span>
              Services 
              <i className="dropdown-arrow"></i>
            </span>
          </li>
          <li>
            <span>
              More 
              <i className="dropdown-arrow"></i>
            </span>
          </li>
          <li>
            <span>
              Sell 
              <i className="dropdown-arrow"></i>
            </span>
          </li>
        </ul>
        <div className="right-section">
        <div className="currency-btn">
          <span>
            USD 
            <i className="dropdown-arrow"></i>
          </span>
        </div>
        <button className="sign-up-btn">SIGN IN</button>
      </div>
      </div>
    </div>
  );
};

export default Header;
import React from 'react';

import Logo from '../../../dist/assets/crown.svg';

import './footer.styles.scss';

const Footer = () => (
  <div className="footer">
    <hr />
    <div className="footer-text"> &copy; JK Clothing. All rights reserved.</div>
    <div className="footer-logo">
      <img className="logo" src={Logo} alt="logo" />
    </div>
  </div>
);

export default Footer;

import React, { Component } from 'react';
//import logo from './logo.svg';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Copyright 2019 All Rights Reserved <a href="/terms" className="footer-link">Terms & Conditions</a> <a href="/privacy" className="footer-link">Privacy</a> 
      </div>
    );
  }
}

export default Footer;
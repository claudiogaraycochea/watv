import React, { Component } from 'react';
import './Welcome.css';
import Footer from '../footer/Footer';
import logo from '../../assets/logo-watv.svg';

class Welcome extends Component {
  render() {
    return (
      <div className="primary-style">
        <div className="container padding-20 center">
          <div className="welcome-wrapper">
            <img src={logo} className="logo" alt="" />
            <div className="slogan">Internet and Television Together</div>
          </div>
        </div>
        <Footer className="footer"/>    
      </div>
    );
  }
}

export default Welcome;
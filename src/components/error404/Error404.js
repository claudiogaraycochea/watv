import React, { Component } from 'react';
import './Error404.css';
import Footer from '../footer/Footer';
import logo from '../../assets/logo-watv.svg';

class Error404 extends Component {
  render() {
    return (
      <div className="tertiary-style">
        <div className="container padding-20 center">
          <div className="welcome-wrapper">
            <div className="title">Ups! Page not found</div>
            <img src={logo} className="logo" alt="" />
            <div className="slogan">Internet and Television Together</div>
          </div>
        </div>
        <Footer className="footer"/>    
      </div>
    );
  }
}

export default Error404;
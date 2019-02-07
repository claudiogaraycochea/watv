import React, { Component } from 'react';
import './Empty.css';
import Footer from '../../footer/Footer';
import logo from '../../../assets/logo-watv.svg';

class Empty extends Component {
  render() {
    return (
      <div className="primary-style">
        <div className="container padding-20 center">
          <div className="empty">
            <div className="message">Ups! the TV Channel or TV Program have not content now.</div>
          </div>
        </div>
        <Footer className="footer"/>    
      </div>
    );
  }
}

export default Empty;
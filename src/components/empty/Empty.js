import React, { Component } from 'react';
import './Empty.css';
import Footer from '../footer/Footer';

class Empty extends Component {
  render() {
    return (
      <div className="tertiary-style">
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
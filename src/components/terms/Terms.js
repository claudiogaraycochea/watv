import React, { Component } from 'react';
import './Terms.css';
import Footer from '../footer/Footer';

class Terms extends Component {
  render() {
    return (
      <div className="secondary-style">
        <div className="container padding-20">
          Terminos y condiciones
        </div>
        <Footer className="footer"/>    
      </div>
    );
  }
}

export default Terms;
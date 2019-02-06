import React, { Component } from 'react';
import './Welcome.css';
import Footer from '../footer/Footer';

class Welcome extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="container">
          Welcome page
          
        </div>
        <Footer />        
      </div>
    );
  }
}

export default Welcome;
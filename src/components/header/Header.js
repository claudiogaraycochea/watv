import React, { Component } from 'react';
import logo from '../../assets/logo-watv.svg';
import './Header.css';

class Main extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" /> 
        <div className="search">Header</div>
        <div className="menu"><div className="icon-menu"></div></div>
      </div>
    );
  }
}

export default Main;
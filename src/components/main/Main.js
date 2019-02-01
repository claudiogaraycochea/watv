import React, { Component } from 'react';
//import logo from './logo.svg';
import './Main.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="container">
            Contenido   
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
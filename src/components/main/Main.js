import React, { Component } from 'react';
//import logo from './logo.svg';
import './Main.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from '../welcome/Welcome';
import Player from '../player/Player';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="container">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/:linkname" component={Player} />            
                </Switch>
            </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
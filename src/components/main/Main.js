import React, { Component } from 'react';
//import logo from './logo.svg';
import './Main.css';
import Header from '../header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from '../welcome/Welcome';
import Player from '../player/Player';
import Terms from '../terms/Terms';
import Privacy from '../privacy/Privacy';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="content">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/terms" component={Terms} />
                    <Route exact path="/privacy" component={Privacy} />
                    <Route path="/:websiteLinkname" component={Player} />  
                </Switch>
            </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Main;
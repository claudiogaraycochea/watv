import React, { Component } from 'react';
//import logo from './logo.svg';
import './Main.css';
import Header from '../header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from '../welcome/Welcome';
import Login from '../user/login/Login';
import Close from '../user/close/Close';
import Player from '../player/Player';
import Terms from '../terms/Terms';
import Privacy from '../privacy/Privacy';
import SideMenu from '../sideMenu/SideMenu';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="main">
        <SideMenu />
        <Header />
        <div className="content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/close" component={Close} />
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SideMenu.css';
import { setSideMenu } from '../../actions';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteLinkname: '',
      data: {},
      refresh: false,
    };
  }

  handleClickOutside() {
    const sideMenu = false;
    this.props.setSideMenu(sideMenu);
  }

  userLogged = () => {
    const visitorFullname = `${sessionStorage.getItem('visitor_firstname')}  ${sessionStorage.getItem('visitor_lastname')}`
    return (
      <div className="visitor-profile">
        <div className="image"></div>
        <div className="fullname">
          Hey {visitorFullname}!
        </div>
        <div className="row">
          This account is used for interactivity with TV channels or shows.
        </div>
        <div className='row'>
          <a href='/credit'>My Credit</a>
        </div>
        <div className='row'>
          <a href="./Close">Close Session</a>
        </div>
      </div>
    );
  }

  userLogin = () => {
    return (
      <div className="visitor-profile">
        <div className="image"></div>
        <div className="fullname">
          Welcome!
        </div>
        <div className="message">
          This account is used for interactivity with TV channels or shows.
        </div>
        <div>
          <a href="./Login">Login / Sign Up</a>
        </div>
      </div>
    );
  }

  render() {
    const visitor_token = sessionStorage.getItem('visitor_token');
    const { sideMenu } = this.props;
    const classMenu = sideMenu ? 'side-menu-wrapper' : 'side-menu-wrapper minimized';
    return(
      <div className={classMenu} >
        <div className="side-menu-bg" onClick={() => this.handleClickOutside()}>
        </div>
        <div ref={this.setWrapperRef} className='side-menu'>
          {(visitor_token) ? this.userLogged() : this.userLogin()}
          {/*(visitor_token) ? this.userLogged() : this.userLogged()*/}
          <div className="footer">Copyright 2019</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sideMenu: state.sideMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSideMenu: (sideMenu) => {
			dispatch(setSideMenu(sideMenu))
		},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);

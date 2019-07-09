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

  render() {
    const { sideMenu } = this.props;
    const classMenu = sideMenu ? 'side-menu-wrapper' : 'side-menu-wrapper minimized';
    return(
      <div className={classMenu} >
        <div className="side-menu-bg" onClick={() => this.handleClickOutside()}>
          Testing
        </div>
        <div ref={this.setWrapperRef} className='side-menu'>
          <div className="image">
          </div>
          <div className="fullname">
            Claudio Garaycochea
          </div>
          <div>
            Close Session
          </div>
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

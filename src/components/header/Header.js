import React, { Component } from 'react';
import logo from '../../assets/logo-watv.svg';
//import iconMenu from '../../assets/icon-menu.svg';
import './Header.css';
import axios from 'axios';
import { API_URL } from '../../constants';
import { connect } from 'react-redux';
import { setSideMenu } from '../../actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteLinkname: '',
      searchList: [],
      loading: false,
    };
    this.handleSearchKeyUp = this.keyUpHandler.bind(this, 'inputSearch');
  }

  keyUpHandler(refName, e) {
    this.setState({
      loading: true
    });
    const inputSearch = e.target.value;
    if(inputSearch.length>3) {
      let postData='q='+inputSearch;
      axios.post(`${API_URL}s`, postData )
        .then(response => {
          this.setState({
            searchList: response.data,
            loading: false
          });
        })
        .catch(error => {
        });
    }
    else {
      this.setState({
        loading: false
      });      
    }
  }

  loading() {
    return (<div className="loading"></div>);
  }

  setSideMenu() {
    const sideMenu = !this.props.sideMenu;
    this.props.setSideMenu(sideMenu);
    this.setState({sideMenu});
  }

  getSearchList(){
    return (
      <div className="search-list-wrapper">
        {this.state.searchList.map(
          (item,i) =>
            <div key={i} className="item">
              {item.website_name} <a href={item.website_linkname} >https://weband.tv/{item.website_linkname}</a>
            </div>
          )
        }
      </div>
    );
  }

  render() {
    return (
      <div className="header">
        <a href="/"><img src={logo} className="logo" alt="" /></a>
        <div className="search">
          <input type="text" onKeyUp={this.handleSearchKeyUp} ref="inputSearch" className="input-search" defaultValue={this.state.websiteLinkname} placeholder="TV Channel/Show"/>
        </div>
        <div className="menu">
          <div className="icon-menu" onClick={() => this.setSideMenu()}/> 
        </div>
        <div className="search-list-result">
          { (this.state.searchList.length>0) ? this.getSearchList(): null }
        </div>
        { (this.state.loading) ? this.loading(): null }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
	return {
		setSideMenu: (sideMenu) => {
			dispatch(setSideMenu(sideMenu))
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

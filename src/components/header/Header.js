import React, { Component } from 'react';
import logo from '../../assets/logo-watv.svg';
//import iconMenu from '../../assets/icon-menu.svg';
import './Header.css';
import axios from 'axios';
import { API_URL } from '../../constants';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteLinkname: '',
      searchList: []
    };
    this.handleSearchKeyUp = this.keyUpHandler.bind(this, 'inputSearch');
  }

  keyUpHandler(refName, e) {
    const inputSearch = e.target.value;
    if(inputSearch.length>3) {
      let postData='q='+inputSearch;
      axios.post(`${API_URL}s`, postData )
        .then(response => {
          this.setState({
            searchList: response.data
          });
        })
        .catch(error => {});
    }
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
          <input type="text" onKeyUp={this.handleSearchKeyUp} ref="inputSearch" className="input-search" defaultValue={this.state.websiteLinkname} placeholder="Search TV Channel/Program"/>
        </div>
        {/*
        <div className="menu">
          <img src={iconMenu} className="icon-menu" alt="Menu" /> 
        </div>*/}
        <div className="search-list-result">
          { (this.state.searchList.length>0) ? this.getSearchList(): null }
        </div>
      </div>
    );
  }
}

export default Main;
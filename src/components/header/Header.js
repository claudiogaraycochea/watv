import React, { Component } from 'react';
import logo from '../../assets/logo-watv.svg';
import './Header.css';
import axios from 'axios';
import { API_URL } from '../../constants';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchList: []
    };
    this.handleSearchKeyUp = this.keyUpHandler.bind(this, 'inputSearch');
  }

  keyUpHandler(refName, e) {
    const inputSearch = e.target.value;
    console.log(inputSearch,' > ', inputSearch.length);
    if(inputSearch.length>3) {
      let postData='q='+inputSearch;
      axios.post(`${API_URL}s`, postData )
        .then(response => {
          console.log('response: ',response);
          this.setState({
            searchList: response.data
          });
        })
        .catch(error => {});
    }
    // prints either LoginInput or PwdInput
  }

  getSearchList(){
    return (
      <div className="search-list-wrapper">
        {this.state.searchList.map(
          (item,i) => 
          <Router>
            <div key={i} class="item">
              <Link to={`${item.website_linkname}`}>{item.website_linkname}</Link>
              {/* {item.website_name} <Link to={item.website_linkname} activeClassName="active">Liiink</Link>*/}
            </div>
          </Router>
          )
        }
      </div>
    );
  }

  render() {
    console.log('****** this.state:',this.state);
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" /> 
        <div className="search">
          <input type="text" onKeyUp={this.handleSearchKeyUp} ref="inputSearch" className="input-search"/>
        </div>
        <div className="menu"><div className="icon-menu"></div></div>
        { (this.state.searchList.length>0) ? this.getSearchList(): null }
      </div>
    );
  }
}

export default Main;
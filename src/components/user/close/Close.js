import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import FacebookLogin from 'react-facebook-login';
import Footer from "../../footer/Footer";
// import axios from 'axios';
// import { API_VISITOR_URL } from '../../../constants';

/* const responseFacebook = (response) => {
  console.log(response);
  console.log('',response.name);
} */

class Close extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteLinkname: '',
      data: {}
    };
  }

  componentWillMount() {
    this.close();
  }

  close() {
   sessionStorage.clear();
  }
  
  render() {
    return(
      <div className="secondary-style">
        <div className="container padding-20 center">
          <div className="center-wrapper">
            <h2>Closed Session</h2>
            <div>
              <a href='/'>Go to Home Page</a>
            </div>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Close));

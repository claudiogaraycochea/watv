import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import Footer from "../../footer/Footer";
import axios from 'axios';
import { API_VISITOR_URL } from '../../../constants';

/* const responseFacebook = (response) => {
  console.log(response);
  console.log('',response.name);
} */

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteLinkname: '',
      data: {}
    };
  }

  login = () => {
    const paramsData = `visitor_email=${this.state.data.email}&visitor_firstname=${this.state.data.first_name}&visitor_lastname=${this.state.data.last_name}&visitor_image=${this.state.data.url}`;
    axios.post(`${API_VISITOR_URL}visitorFBLogin`, paramsData )
      .then(response => {
        if(response.data.visitor_token!==undefined) {
          sessionStorage.setItem('visitor_id',response.data.visitor_id);
          sessionStorage.setItem('visitor_firstname',response.data.visitor_firstname);
          sessionStorage.setItem('visitor_token',response.data.visitor_token);
          sessionStorage.setItem('visitor_image',response.data.visitor_image);
          // this.props.openSession(response.data.user_firstname);
          this.props.history.push("/");
        }
        else
          this.setState({
            message: {
              text: 'Email or password is incorrect',
              typeMessage: 'alert',
            }
            , loading: false });
      })
      .catch(error => {});
  }

  responseFacebook = (response) => {
    this.setState({
      data: {
        first_name: response.first_name,
        last_name: response.last_name,
        email: response.email,
        url: response.picture.data.url
      }
    })
  }
  
  render() {
    const { first_name, last_name, email, url } = this.state.data;
    console.log('state: ', this.state);
    if(first_name === undefined) {
      return(
        <div className="tertiary-style">
          <div className="container padding-20 center">
            <div className="center-wrapper">
              <h2>Login</h2>
              <FacebookLogin
                appId="2444720422428009"
                autoLoad={true}
                fields="first_name,last_name,email,picture"
                callback={this.responseFacebook} />
            </div>
          </div>
          <Footer className="footer" />
        </div>
      );      
    } else {
      this.login();
      return(
        <div className="tertiary-style">
          <div className="container padding-20 center">
            <div className="center-wrapper">
              <h2>Welcome</h2>
              <div>
                First Name: {first_name}
              </div>
              <div>
                Last Name: {last_name}
              </div>
              <div>
                Email: {email}
              </div>
              <div>
                <img src={url} alt="url" />
              </div>
            </div>
          </div>
          <Footer className="footer" />
        </div>
      );
    }
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
)(withRouter(Login));

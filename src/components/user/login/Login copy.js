import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import Footer from "../../footer/Footer";
import axios from 'axios';
import { API_VISITOR_URL } from '../../../constants';
import { FacebookProvider, LoginButton, Status } from 'react-facebook';

/* const responseFacebook = (response) => {
  console.log(response);
  console.log('',response.name);
} */

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteLinkname: '',
      status: 'unknow',
      data: {
        first_name: '',
      }
    };
  }

  /* login = () => {
    const paramsData = `visitor_email=${this.state.data.email}&visitor_firstname=${this.state.data.first_name}&visitor_lastname=${this.state.data.last_name}&visitor_image=${this.state.data.url}`;
    axios.post(`${API_VISITOR_URL}visitorFBLogin`, paramsData )
      .then(response => {
        if(response.data.visitor_token!==undefined) {
          sessionStorage.setItem('visitor_id',response.data.visitor_id);
          sessionStorage.setItem('visitor_firstname',response.data.visitor_firstname);
          sessionStorage.setItem('visitor_lastname',response.data.visitor_lastname);
          sessionStorage.setItem('visitor_token',response.data.visitor_token);
          sessionStorage.setItem('visitor_image',response.data.visitor_image);
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
  }*/
  
  login = () => {
    // console.log('login: state: ', this.state);
    const paramsData = `visitor_email=${this.state.data.email}&visitor_firstname=${this.state.data.first_name}&visitor_lastname=${this.state.data.last_name}&visitor_image=${this.state.data.url}`;
    axios.post(`${API_VISITOR_URL}visitorFBLogin`, paramsData )
      .then(response => {
        if(response.data.visitor_token!==undefined) {
          sessionStorage.setItem('visitor_id',response.data.visitor_id);
          sessionStorage.setItem('visitor_firstname',response.data.visitor_firstname);
          sessionStorage.setItem('visitor_lastname',response.data.visitor_lastname);
          sessionStorage.setItem('visitor_token',response.data.visitor_token);
          sessionStorage.setItem('visitor_image',response.data.visitor_image);
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

  /* responseFacebook = (response) => {
    console.log('responseFacebook:',response);
    this.setState({
      data: {
        first_name: response.first_name,
        last_name: response.last_name,
        email: response.email,
        url: response.picture.data.url
      }
    })
  }*/

  responseFacebook = (response) => {
    // console.log('responseFacebook:',response);
    if(response.profile.first_name !== '') {
      // console.log('responseFacebook: response.profile.first_name: ', response.profile.first_name);
      const data = {
        facebook_id: response.profile.id,
        first_name: response.profile.first_name,
        last_name: response.profile.last_name,
        email: response.profile.email,
        url: response.picture.data.url
      };
      // console.log('***********> data: ', data);
      /* this.setState({

      })*/
    } else {
      // console.log('responseFacebook: empty');
    }

  }
 
  handleError = (error) => {
    this.setState({ error });
  }
  
  refreshStatus = (status) => {
    this.setState({
      status: 'unknown'
    })
  }

  render() {
    // console.log('render: state: ',this.state);
    const { status } = this.state.data;
    
    if(status === 'unknow') {
      return (
        <div className="tertiary-style">
          <div className="container padding-20 center">
            <div className="center-wrapper">
              <FacebookProvider appId="2444720422428009">
                <LoginButton
                  scope="email"
                  onCompleted={this.responseFacebook}
                  onError={this.handleError}
                >
                  <span>Login via Facebook</span>
                </LoginButton>
              </FacebookProvider>
            </div>
          </div>
        </div>
      );
      /*
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
      */
    } 
    
    if (status !== 'unknow') {
      //this.login();
      // console.log('===> no first_name:', this.state);
      return (
        <div className="tertiary-style">
          <div className="container padding-20 center">
            <div className="center-wrapper">
              <FacebookProvider appId="2444720422428009">
                <Status>
                  {({ loading, status }) => (
                    <div>
                      Logged succefull 
                      <div>
                        Loading {loading}
                      </div>
                      <div>
                        Status:
                        {this.refreshStatus(status)}
                      </div>
                    </div>
                  )}
                </Status>
              </FacebookProvider>
            </div>
          </div>
        </div>
      );
      /* 
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
      */
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

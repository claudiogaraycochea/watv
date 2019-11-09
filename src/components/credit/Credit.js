import React, { Component } from 'react';
import './Credit.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from "../footer/Footer";

class Credit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="secondary-style credit-wrapper">
        <div className="container padding-20 text-center">
          <h2>My Credit</h2>
          <div className='row'>
            <i className='circle-credit'></i>
          </div>      
          <div className='amount'>
            $ 0.00
          </div>
          <div className='row line'>
            <a className='btn' href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=22970572-acaab5de-d173-4e73-8345-6d9f07d67162">Buy Credit</a>
          </div>
          <div className='row'>
            <a href='./payments'>My Payments</a>
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
)(withRouter(Credit));

import React, { Component } from 'react';
import './BuyNow.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from "../footer/Footer";

class BuyNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 100,
      paymentStatus: false,
      payment_url_success: 'https://weband.tv/incorrectas',
    };
  }

  buyNow() {
    console.log('call to buy API');
    this.setState({
      amount: (100 - 10),
      paymentStatus: true,
    });
  }

  render() {
    const { amount, paymentStatus, payment_url_success } = this.state;
    return (
      <div className="secondary-style credit-wrapper">
        <div className="container padding-20 text-center">
          <h2>Buy Now</h2>
          <div className='row'>
            {(paymentStatus) ? (
              <div>
                <div className='image-checked-wrapper'>
                  <i className='image-checked'></i>
                  <i className='circle-credit'></i>
                </div>
                <div className='notification-success'>Congratulations!!! You've approved checkout.</div>              
              </div>
            ) : (<i className='circle-credit'></i>) }

          </div>
          <div className='row'>
            <h3>Product Title</h3>
            <div className='text-center'>Description</div>
          </div>
          <div className='amount'>
            $ {amount}
          </div>
          <div className='row text-center'>
            {(paymentStatus) ? (
              <a href={`${payment_url_success}`} className='btn'>Go Back</a>
            ) : (<button className='btn' onClick={() => this.buyNow()}>
              Buy Now
            </button>) }
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
)(withRouter(BuyNow));

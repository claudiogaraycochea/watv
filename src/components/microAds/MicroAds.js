import React, { Component } from 'react';
import './MicroAds.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from "../footer/Footer";

class MicroAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 100,
      paymentStatus: false,
      title: 'Title',
      description: 'Description',
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
  }

  buyNow() {
    console.log('call to buy API');
    this.setState({
      amount: (100 - 10),
      paymentStatus: true,
    });
  }

	handleInputChange(event) {
		const { target } = event;
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value;

		this.setState({ [name]: value });
  }

  render() {
    const { amount, paymentStatus, title, description, url, location, gender } = this.state;
    return (
      <div className="secondary-style">
        <div className="container padding-20">
          <h2>Micro Ads</h2>
          <div className='row'>
            <input
              type='text'
              name='title'
              value={title}
              className='inp'
              placeholder='Title'
              onChange={this.handleInputChange}
            />
          </div>
          <div className='row'>
            <textarea
              className='inp'
              placeholder='Description'
              name='description'
              value={description}
              onChange={this.handleInputChange}></textarea>
          </div>
          <div className='row'>
            <input 
              type='text'
              name='url'
              value={url}
              className='inp'
              placeholder='URL'
              onChange={this.handleInputChange}
            />
          </div>
          <div className='row'>
            <div className='microads-wrapper'>
              <a href={url} target='_blank'>
                <div className='title'>{title}</div>
              </a>
              <div className='description'>
                {description}
              </div>
              <a href='https://weband.tv/microads' className='ads-link'>Anuncia Aquí</a>
            </div>
          </div>
          <div className='row'>
            <h3>Filter</h3>
            <input
              type='text'
              name='location'
              value={location}
              className='inp'
              placeholder='Location (City/Country)'
              onChange={this.handleInputChange}
            />
          </div>
          <div className='row'>
            <select
              type='text'
              name='gender'
              value={gender}
              className='inp'
              placeholder='Gender'
              onChange={this.handleInputChange}
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='undefined'>Undefined</option>
            </select>
          </div>
          <div className='row'>
            <select
              type='text'
              name='amount'
              value={amount}
              className='inp'
              placeholder='Amount'
              onChange={this.handleInputChange}
            >
              <option value='1000'>$1000</option>
              <option value='1500'>$1500</option>
              <option value='2000'>$2000</option>
              <option value='2500'>$2500</option>
              <option value='3000'>$3000</option>
              <option value='3500'>$3500</option>
            </select>
          </div>
          <div className='row'>
            {(paymentStatus) ? (
              <div className='notification-success'><i className='check'></i> Congrats. Payment success!!!</div>
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
)(withRouter(MicroAds));

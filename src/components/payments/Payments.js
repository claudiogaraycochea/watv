import React, { Component } from 'react';
import './Payments.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from "../footer/Footer";

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="secondary-style">
      <div className="container padding-20">
        <div className="w-100">
          <h2>My Payments</h2>
          <div className='payments-wrapper'>
            <div className='row'>
              <a href='./credit'>My Credit</a>
            </div>
            <div className='table-responsive'>
              <table className="w-100">
                <thead>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Price</th>
                </thead>
                <tbody>
                  <tr>
                    <td>109301</td>
                    <td>Sorteo de 10000</td>
                    <td>10/10/2019</td>
                    <td>$15</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
         </div>
				</div>
				<Footer className="footer" />
			</div>;
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
)(withRouter(Payments));

import React, { Component } from 'react';
import './Player.css';
import { addToCart } from '../../actions';
import { connect } from 'react-redux';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkname: '',
    };
  }

  componentWillMount() { 
    console.log('player loaded',this.props.match.params.linkname);
    this.setState({
      linkname: this.props.match.params.linkname
    });
  }

  render() {
    return (
      <div>
        Player {this.state.linkname}
        {this.props.products.map(product =>
          <div className="item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <button onClick={() => this.props.addToCart(product)} >Add</button>
              </p>
            </div>
          </div>
        )}
        <iframe ></iframe>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    text: state.text
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart(product){
      dispatch(addToCart(product));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);
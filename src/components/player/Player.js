import React, { Component } from 'react';
import './Player.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../../constants';
import Channel from '../channel/Channel';
import Program from '../program/Program';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteLinkname: '',
      data: {}
    };
  }

  componentDidMount() {
    const websiteLinkname = 'website_linkname='+this.props.match.params.websiteLinkname;
    axios.post(`${API_URL}getPlaylist`, websiteLinkname )
      .then(response => {
        this.setState({
          data: {
            websiteId: response.data.website_id,
            playlistSrc: response.data.playlist_src,
            websiteLinknameParent: response.data.website_linkname_parent,
            websiteType: response.data.website_type
          }
        });
      })
      .catch(error => {});
  }

  render() {
    if(this.state.data.playlistSrc!==undefined){
      if(this.state.data.websiteType==='1'){
        return (
          <Program data={this.state.data} websiteLinkname={this.props.match.params.websiteLinkname} />
        );     
      }
      else {
        return (
          <Channel data={this.state.data} />
        )
      }
    }
    else {
      return (
        <div className="primary-style">
          <div className="container padding-20 center">
            Loading...
          </div>
        </div>);
    }
  }
}

const mapStateToProps = state => {
  return {
    //data: state.data,
    //text: state.text
  }
}

const mapDispatchToProps = dispatch => {
  return {
    /*addToCart(product){
      dispatch(addToCart(product));
    }*/
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);
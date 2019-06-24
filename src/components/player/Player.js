import React, { Component } from 'react';
import './Player.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../../constants';
import Channel from '../channel/Channel';
import Program from '../program/Program';
import Error404 from '../error404/Error404';

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
      if(this.state.data.websiteType==='2') {
        return (
          <Channel data={this.state.data} />
        )
      }
      if(this.state.data.websiteId===null){
        return (<Error404 />)
      }
    }
    else {
      return (
        <div className="tertiary-style">
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
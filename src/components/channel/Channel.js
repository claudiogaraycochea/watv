import React, { Component } from 'react';
import './Channel.css';
import Empty from '../empty/Empty';

class Channel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteLinkname: '',
      data: {},
      timeNow: '',
    };
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    });
  }
  render() {
    console.log('CHANNEL: ',this.props);
    console.log('CHANNEL STATE:', this.state);
    if(this.props.data.playlistSrc.length>0){
      return (
        <div>
          <h2>Channel</h2>
          ---
          <div>
            {this.props.data.playlistSrc.map((item,i) => <div key={i}>{decodeURI(item.module_name)} / {item.module_link}</div>)}
          </div>
          
        </div>
      );
    }
    else {
      return (<Empty />)
    }
  }
}

export default Channel;
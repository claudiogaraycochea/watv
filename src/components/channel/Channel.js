import React, { Component } from 'react';
import './Channel.css';

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
}

export default Channel;
import React, { Component } from 'react';
import './Player.css';

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
        <iframe ></iframe>
      </div>
    );
  }
}

export default Player;
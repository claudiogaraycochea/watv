import React, { Component } from 'react';
import './Program.css';

class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteLinkname: '',
      data: {},
      date: new Date().toLocaleTimeString(),
    };
    this.updateDate = this.updateDate.bind(this);
    this.interval = setInterval(this.updateDate, 1000);
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  updateDate() {
    this.setState({
      date: new Date().toLocaleTimeString(),
    });
  }

  playTime() {
    /*player.time_now = player.getTimeNow();
    $('#player-time').html(player.time_now);
    player.setItemData(player.time_now);*/
    setTimeout(
      this.playTime()
    , 1000);
  }

  render() {
    return (
      <div>
        <h2>Program</h2>
        <div>It is {this.state.date}.</div>
        ---
        <div>
          {this.props.data.playlistSrc.map((item,i) => <div key={i}>{decodeURI(item.module_name)} / {item.module_link}</div>)}
        </div>
      </div>
    );
  }
}

export default Program;
import React, { Component } from 'react';
import './Channel.css';
import Empty from '../empty/Empty';
import Footer from '../footer/Footer';

class Channel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteLinkname: '',
      data: {},
      playlistSrc: [],
    };
  }

  getProgramQueryDayToQueryDay(programQueryDay){
    let date = programQueryDay.split('-');
    date = new Date(date[0]+'/'+date[1]+'/'+date[2]);
    let day = date.toLocaleDateString('en-US', { weekday: 'short' });
    return day.toLowerCase();
  }

  componentDidMount() {
    const queryDay = this.getProgramQueryDayToQueryDay(new Date().toDateInputValue());
    const playlistSrcFull = this.props.data.playlistSrc;
    const playlistSrc = playlistSrcFull.filter(function (item) {
      return (item.program_day.indexOf(queryDay)>-1)
    });
    //const playingItem = this.getPlayingItem(playlistSrc);
    this.setState({
      websiteLinkname: this.props.websiteLinkname,
      data: this.props.data,
      playlistSrc,
      queryDay
    });
  }

  timeToHHMM(data){
    let time = data.split(':');
    return time[0]+':'+time[1];
  }

  render() {
    // console.log('CHANNEL: ',this.props);
    // console.log('CHANNEL STATE:', this.state);
    if(this.state.playlistSrc.length>0){
      return (
        <div className="tertiary-style channel">
          {
            this.state.playlistSrc.map((item,i) => 
              <div className="item" key={i}>
                <div className="time">
                  {this.timeToHHMM(item.program_begin)}hs
                </div>
                <div className="detail">
                  <div className="title">{decodeURI(item.module_name)}</div>
                  <div className="link"><a href={item.module_link}>{item.module_link}</a></div>
                </div>
              </div>
            )
          }
          <Footer className="footer"/>  
        </div>
      );
    }
    else {
      return (<Empty />)
    }
  }
}

export default Channel;
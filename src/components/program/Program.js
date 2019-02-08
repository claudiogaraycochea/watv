import React, { Component } from 'react';
import './Program.css';
import axios from 'axios';
import { API_URL } from '../../constants';
import Empty from '../empty/Empty';

class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteLinkname: '',
      data: {},
      date: '',
      playlistSrc: [],
      playingItem: 0,
      playlistLastUpdate: '',
      playlistLastUpdateReseted: false,
      resetPlaylistSrc: false,
      resetPlaylistSrcResponse: {},
      refreshPlaylistSrc: 60000,
      refreshPlayingItem: 1000,
      queryDay: '',
      playingItemTest: 0,
      playerStatus: 'play',
    };
    this.updateDate = this.updateDate.bind(this);
    this.interval = setInterval(this.updateDate, this.state.refreshPlayingItem);
    this.updateDatePlaylistSrc = this.updateDatePlaylistSrc.bind(this);
    this.intervalPlaylistSrc = setInterval(this.updateDatePlaylistSrc,this.state.refreshPlaylistSrc);
    this.handleOnClickPlay = this.handleOnClickPlay.bind(this);
    this.handleOnClickChange = this.handleOnClickChange.bind(this);
  }

  timeToNumber(time){
    time = time.replace(":", "");
    time = time.replace(":", "");
    return time;
  }

  checkTime(i) {
    return (i < 10) ? "0" + i : i;
  }

  getTimeNow(){
    let today = new Date(),
    h = this.checkTime(today.getHours()),
    m = this.checkTime(today.getMinutes()),
    s = this.checkTime(today.getSeconds());
    return h + ":" + m + ":" + s;
  }

  getPlayingItem(playlistSrc) {
    let count = 0;
    let programBeginNumber = '';
    let timeNowNumber = this.timeToNumber(this.getTimeNow());
    for(let i=0;i<playlistSrc.length;i++){
      programBeginNumber = this.timeToNumber(playlistSrc[i]['program_begin']);
      if(programBeginNumber > timeNowNumber) {
        if(parseInt(i)+1<=playlistSrc.length){
          count = parseInt(i)+1;
        }
      }
    }
    return count;
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
    const playingItem = this.getPlayingItem(playlistSrc);
    this.setState({
      websiteLinkname: this.props.websiteLinkname,
      data: this.props.data,
      playlistSrc,
      playingItem,
      queryDay
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  handleOnClickPlay(){
    console.log('Play');
    let playerStatus = this.state.playerStatus;
    if(playerStatus==='play'){
      this.setState({
        playerStatus: 'pause'
      });
    }
    if(playerStatus==='pause'){
      this.setState({
        playerStatus: 'play'
      });
    }
  }

  handleOnClickChange(e){
    const option = e.target.value;
    let playingItem = parseInt(this.state.playingItem);
    const playingItemLimit = this.getPlayingItem(this.state.playlistSrc);
    const playlistSrcTotal = this.state.playlistSrc.length-1;
    let playerStatus = this.state.playerStatus;

    if(option==='back'){
      if(playingItem<playlistSrcTotal) {
        playerStatus = 'pause';
        playingItem = playingItem+1;
      }
    }

    if(option==='next'){
      if(playingItem>playingItemLimit) {
        playerStatus = 'pause';
        playingItem = playingItem-1;
      }
    }

    if(option==='now'){
      playerStatus = 'play';
      playingItem = this.getPlayingItem(this.state.playlistSrc);
    }

    this.setState({
      playerStatus,
      playingItem
    })
    
  }
  
  updateDate() {
    if(this.state.playerStatus==='play'){
      //console.log('playerStatus = play');
      const playingItem = this.getPlayingItem(this.state.playlistSrc);
      this.setState({
        playingItem,
      });      
    }
    /*if(this.state.playerStatus==='pause'){
      console.log('playerStatus = pause');
    }*/
  }

  updateDatePlaylistSrc() {
    let postData='website_id='+this.state.data.websiteId;
    axios.post(`${API_URL}playlistLastUpdate`, postData )
      .then(response => {
        //console.log('response.data.lu_time',response.data.lu_time,'  ---->  ',this.state.playlistLastUpdate);
        if (this.state.playlistLastUpdate===''){
          this.setState({
            playlistLastUpdate: response.data.lu_time,
          });
        }
        else
        if((response.data.lu_time!==this.state.playlistLastUpdate)&&(response.data.lu_time!==undefined)){
          this.setState({
            playlistLastUpdate: response.data.lu_time,
            playlistLastUpdateReseted: true,
          });
        }
      })
      .catch(error => {});
  }

  resetPlaylistSrc(){
    const queryDay = this.state.queryDay;
    const playlistSrcFull = this.state.resetPlaylistSrcResponse;
    const playlistSrc = playlistSrcFull.filter(function (item) {
      return (item.program_day.indexOf(queryDay)>-1)
    });
    const playingItem = this.getPlayingItem(playlistSrc);
    this.setState({
      resetPlaylistSrc: false,
      playlistLastUpdateReseted: false,
      playingItem: playingItem,
      playlistSrc: playlistSrc
    });
  }

  getPlaylistSrc() {
    const websiteLinkname = 'website_linkname='+this.state.websiteLinkname;
    axios.post(`${API_URL}getPlaylist`, websiteLinkname )
      .then(response => {
        this.setState({
          resetPlaylistSrc: true,
          resetPlaylistSrcResponse: response.data.playlist_src
        });
      })
      .catch(error => {});
  }

  render() {
    //console.log('RESET STATE:',this.state);
    if(this.state.playlistSrc.length>0){
      if(this.state.playlistLastUpdateReseted===true) {this.getPlaylistSrc();}
      if(this.state.resetPlaylistSrc===true) {this.resetPlaylistSrc();}
      return (
        <div className="primary-style">
          <div className="container">
            <iframe title={'watv'} src={this.state.playlistSrc[this.state.playingItem].module_link} className="iframe-container"></iframe>
            <div className="console-wrapper">
              {
                this.state.playlistSrc.map((item,i) => 
                  <div key={i} className={(i===this.state.playingItem) ? 'playing-item selected' : 'playing-item'} >
                    <div>{i}</div>
                    <div>
                      {decodeURI(item.module_name)} 
                      {item.module_link}
                    </div>
                    {item.program_day} 
                    {item.program_begin} 
                  </div>
                )
              }
            </div>
          </div>
          <div className="player-control">
            <button onClick={this.handleOnClickPlay}>{(this.state.playerStatus==='play') ? 'Play' : 'Pause'}</button> 
            <button onClick={this.handleOnClickChange} value="back">Back</button> 
            <button onClick={this.handleOnClickChange} value="next">Next</button> 
            <button onClick={this.handleOnClickChange} value="now">Now</button>
          </div> 
        </div>
      );      
    }
    else {
      return (<Empty />);
    }
  }
}

export default Program;
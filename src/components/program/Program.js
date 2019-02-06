import React, { Component } from 'react';
import './Program.css';
import axios from 'axios';
import { API_URL } from '../../constants';

class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteLinkname: '',
      data: {},
      date: '',
      playlistSrc: [],
      playingItem: '',
      playlistLastUpdate: '',
      playlistLastUpdateReseted: false,
      resetPlaylistSrc: false,
      resetPlaylistSrcResponse: {},
      refreshPlaylistSrc: 60000,
      refreshPlayingItem: 1000,
    };
    this.updateDate = this.updateDate.bind(this);
    this.interval = setInterval(this.updateDate, this.state.refreshPlayingItem);
    this.updateDatePlaylistSrc = this.updateDatePlaylistSrc.bind(this);
    this.intervalPlaylistSrc = setInterval(this.updateDatePlaylistSrc,this.state.refreshPlaylistSrc);
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
    //console.log('getPlayingItem',timeNowNumber)
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

  componentDidMount() {
    const playlistSrcFull = this.props.data.playlistSrc;
    const playlistSrc = playlistSrcFull.filter(function (item) {
      return item.program_day === 'tue'
    });
    const playingItem = this.getPlayingItem(playlistSrc);
    this.setState({
      websiteLinkname: this.props.websiteLinkname,
      data: this.props.data,
      playlistSrc,
      playingItem,
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  updateDate() {
    const playingItem = this.getPlayingItem(this.state.playlistSrc);
    this.setState({
      playingItem,
    });
  }

  updateDatePlaylistSrc() {
    let postData='website_id='+this.state.data.websiteId;
    axios.post(`${API_URL}playlistLastUpdate`, postData )
      .then(response => {
        console.log('response.data.lu_time',response.data.lu_time,'  ---->  ',this.state.playlistLastUpdate);
        if (this.state.playlistLastUpdate===''){
          console.log('first time');
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
    console.log('RESET RESPONSE');
    const playlistSrcFull = this.state.resetPlaylistSrcResponse;
    const playlistSrc = playlistSrcFull.filter(function (item) {
      return item.program_day === 'tue'
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
    if(this.state.playlistSrc.length>0){
      if(this.state.playlistLastUpdateReseted===true) {this.getPlaylistSrc();}
      if(this.state.resetPlaylistSrc===true) {this.resetPlaylistSrc();}
      return (
        <div className="iframe-wrapper">
          <iframe  title={'watv'} src={this.state.playlistSrc[this.state.playingItem].module_link} className="iframe-container"></iframe>
          <div className="console-wrapper">
            {this.state.playlistSrc.map((item,i) => <div key={i} className={(i===this.state.playingItem) ? 'playing-item selected' : 'playing-item'} >{i} {decodeURI(item.module_name)} / {item.module_link} / {item.program_day} / {item.program_begin} </div>)}
          </div>
        </div>
      );      
    }
    else {
      return (<div>Esta vacio</div>);
    }
  }
}

export default Program;
import React from 'react';
import { } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlay, faStepForward, faStepBackward, faVolumeMute, faVolumeUp, faPause } from '@fortawesome/free-solid-svg-icons'
// import { recieveCurrentSong, pauseCurrentSong, clearCurrentSong } from '../../../actions/song_actions'

// import { connect } from 'react-redux';

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false, 
            time: "",
            volume: 100,
            previousVolume: 0,
            duration: "",
            timeDuration: "",
            timePosition: "",
            currentSong: 0,
            presentSong: this.props.presentSong,
            change: false,
            duration: "",
            // songImage: "",
            // songHistory: [],
        }
        this.setVolume = this.setVolume.bind(this);
        this.setTime = this.setTime.bind(this);
        this.audio = this.audio.bind(this);
        this.nextSong = this.nextSong.bind(this)
        this.sound = React.createRef();
        this.setState = this.setState.bind(this)
        this.stupid = this.stupid.bind(this)
    }

    componentDidMount() {
        
        // this.props.fetchPlaylist(this.props.match.params.playlistId);
        this.props.fetchSongs();
        if (this.sound) {
            setInterval(() => this.setState({
                duration: this.sound.duration,
                time: this.songTime(this.sound.currentTime),
                timeDuration: `${Math.floor(this.sound.duration / 60)}:${Math.floor(this.sound.duration % 60)}`,
                timePosition: `${this.sound.currentTime}`,
            }), 0)

            this.setState({ presentSong: this.props.presentSong })
            
            // if (this.props.presentSong) {
            //     this.setState({ currentSong: this.state.songs.indexof(this.props.presentSong) })
            // }

        }
            // this.props.recieveSong();
    }

    componentDidUpdate(a = prevProps) {
        if (this.props.presentSong !== a.presentSong) {
            debugger
            let song = this.props.presentSong
            this.setState({ presentSong: song }) // currentSong: _.findIndex(this.props.songs, this.props.songs.filter(el => el.id === this.props.presentSong.id)[0]) })
            this.audio();
        }

        if (this.state.change) {
            this.audio();
            this.stupid();
            this.setState({ change: false })
        }
     
    }

    handleClick() {
        debugger
        if (this.props.songs.length) {
            // this.props.receiveCurrentPlaylist(this.props.playlist)
            // if (this.props.playlist.length < 0) { this.props.receiveCurrentPlaylist(this.props.playlist) };
            this.stupid();
            this.audio();
        }
    }

    stupid() {
        this.setState({ presentSong: this.props.songs[this.state.currentSong] })
    }

    audio() {
        debugger
        // if (this.props.songs.length > 0) {
            if (this.state.playing === false) {
                
                this.sound.play();
                this.setState({ playing: true })
            } else if (this.state.playing === true) {
                
                this.sound.pause();
                this.setState({ playing: false })
            }
        // }
    }

    previousSong() {
        if (this.props.songs.length) {
            if (this.state.playing === true) {
                
                this.setState({ currentSong: this.state.currentSong === 0 ? this.props.songs.length - 1 : (this.state.currentSong - 1) % this.props.songs.length, playing: false, change: true });
                this.props.recieveCurrentSong(this.props.songs[this.state.currentSong])
                // this.audio()
            } else {
                
                this.setState({ currentSong: this.state.currentSong === 0 ? this.props.songs.length - 1 : (this.state.currentSong - 1) % this.props.songs.length });
                this.props.recieveCurrentSong(this.props.songs[this.state.currentSong])
                this.audio()
            }
        }
    }

    nextSong() {
        if (this.props.songs.length) {
            if (this.state.playing === true) {
                this.setState({ currentSong: (this.state.currentSong + 1) % this.props.songs.length, playing: false, change: true });
                this.props.recieveCurrentSong(this.props.songs[this.state.currentSong])
                this.props.Song_Alive_or_Dead(this.state.playing)
                
                // this.audio()
            } else {
                
                this.setState({ currentSong: (this.state.currentSong + 1) % this.props.songs.length });
                this.props.recieveCurrentSong(this.props.songs[this.state.currentSong])
                // this.props.Song_Alive_or_Dead(false)
                this.audio()
            }
        }
    }

    songTime(time) {
        let rounded = Math.floor(time);
        let minutes = Math.floor(rounded / 60);
        let seconds = Math.floor(rounded % 60);
        seconds >= 10 ? seconds = seconds : seconds = `0${seconds}`;
        return `${minutes}:${seconds}`;
    }

    setVolume(vol) {
        this.sound.volume = vol / 100;
        this.setState({ volume: vol });
    }

    setTime(position) {
        this.sound.currentTime = position;
        this.setState({ time: position })
    }

    toggleMute() {
        // let volumeLevel = document.getElementById("volume-level")
        if (this.sound.volume > 0) {
            this.setState({ previousVolume: this.sound.volume, volume: 0 })
            this.sound.volume = 0
        } else {
            this.setState({ volume: this.state.previousVolume * 100 })
            this.sound.volume = this.state.previousVolume
            // volumeLevel.value = this.sound.volume * 100
        }
    }

    render () {
        let songUrl = this.props.songs.map( song => {
            return (
                song.trackUrl
            )
        })
        
            return (
            <footer className="footer">
                <div className="footer-left">
                    <span className="currentSong" draggable="true">
                        <img src={this.state.presentSong ? this.state.presentSong.photoUrl : this.props.songs[this.state.currentSong].photoUrl }/>
                    </span>
                    <div className="songInfo" draggable="true">
                        <div className="songName">
                            <a className="songInfo-track" href="">{ this.state.presentSong ? this.state.presentSong.title : this.props.songs[this.state.currentSong].title }</a>
                        </div>
                        <div className="songArtist" draggable="true">
                            <a className="songInfo-artist" href="">{this.state.presentSong ? this.state.presentSong.artist_name : this.props.songs[this.state.currentSong].artist_name }</a>
                        </div>
                    </div>
                    <button className="likeSong"><FontAwesomeIcon icon={faHeart} /></button>
                </div>

                <div className="footer-center">
                    <div className="controls">
                        <button onClick={() => this.previousSong()} className="previous"><FontAwesomeIcon icon={faStepBackward} /></button>
                        <button onClick={() => this.handleClick()} className="playpause">{this.state.playing === false ? <FontAwesomeIcon className="pp" icon={faPlay}/> : <FontAwesomeIcon className="pause" icon={faPause} />}</button>
                        <button onClick={() => this.nextSong()} className="forward"><FontAwesomeIcon icon={faStepForward} /></button>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-time">{this.state.time}</div>
                        <div className="progress-container">
                            <input className="slider" type="range" min="0" max={this.state.duration} value={this.state.timePosition} 
                                onChange={(e) => this.setTime(e.currentTarget.value)}
                            />
                        </div>
                        <div className="progress-time">{(this.state.timeDuration)}</div>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="volume-bar">
                        <div className="progress-container">
                            <button onClick={() => this.toggleMute()} className="volume-mute">{this.state.volume > 0 ? <FontAwesomeIcon className="FontAwesomeIcon" icon={faVolumeUp} /> : <FontAwesomeIcon className="FontAwesomeIcon" icon={faVolumeMute} />}</button>
                            <input className="volume-level" type="range" min="0" max="99" value={this.state.volume} step="1" 
                                onChange={(e) => this.setVolume(e.currentTarget.value)}
                            />
                        </div>
                    </div>
                </div>
                    <audio ref={(s) => this.sound = s} src={Object.values(this.props.presentSong).length === 0 ? songUrl[this.state.currentSong] : this.props.presentSong.trackUrl} />
            </footer>
        )
    }
}

export default Footer;
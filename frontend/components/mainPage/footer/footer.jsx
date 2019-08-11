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
            // songHistory: [],
        }
        this.setVolume = this.setVolume.bind(this);
        this.setTime = this.setTime.bind(this);
        this.audio = this.audio.bind(this);
        this.nextSong = this.nextSong.bind(this)
        this.sound = React.createRef();
    }

    componentDidMount() {
        
        this.props.fetchSongs();
        if (this.sound) {
            setInterval(() => this.setState({
                // duration: this.sound.duration,
                time: this.songTime(this.sound.currentTime),
                timeDuration: `${Math.floor(this.sound.duration / 60)}:${Math.floor(this.sound.duration % 60)}`,
                timePosition: `${this.sound.currentTime}`,
            }), 0)
        }
            // this.props.recieveSong();
    }

    componentDidUpdate(prevProps) {
        if (this.props.presentSong !== prevProps.presentSong) {
            this.audio();
            // this.sound.play();
            // this.setState({ playing: true });
        }

        if (this.state.change) {
            this.audio();
            this.setState({ change: false })
        }
        // } else if (this.state.playing === true) {
        //     this.sound.pause();
        //     this.setState({ playing: false });
        // }
        // } else if (this.state.playing === false) {
        //     
        //     let playProm = this.sound.play();
        //     this.setState({ playing: true })
            // if (playProm !== undefined) {
            //     playProm.then(() => this.sound.pause()).catch(error => {})
            // } 
            // this.sound.play();
            // this.setState({ playing: true })
     
    }

    audio() {
        debugger
        // if (this.props.presentSong.id !== )
        // else 
        if (this.state.playing === false) {
            debugger
            this.sound.play();
            this.setState({ playing: true })
        } else if (this.state.playing === true) {
            debugger
            this.sound.pause();
            this.setState({ playing: false })
        }
    }

    previousSong() {
        this.audio()
        if (this.state.currentSong === 0) {
            this.setState({ currentSong: this.props.songs.length })
            this.props.presentSong = this.props.songs[this.state.currentSong];
        } else {
            this.setState({ currentSong: this.state.currentSong - 1 })
            this.props.presentSong = this.props.songs[this.state.currentSong];
        }
        this.audio()
    }

    nextSong() {
        if (this.state.playing === true) {
            this.setState({ currentSong: (this.state.currentSong + 1) % this.props.songs.length, playing: false, change: true });
            debugger
            // this.props.presentSong = this.props.songs[this.state.currentSong];
            // this.sound = <audio src={this.state.presentSong.trackUrl}></audio>;
            this.audio()
        } else {
            debugger
            this.setState({ currentSong: (this.state.currentSong + 1) % this.props.songs.length });
            // this.props.presentSong = this.props.songs[this.state.currentSong];
            
            debugger
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
        // let var = this.props.songs ? this.state.timePosition === this.state.timeDuration ? this.props.songs[(this.state.currentSong + 1) % this.props.songs.length].trackUrl : this.props.songs[this.state.currentSong % this.props.songs.length].trackUrl : ""
        let songUrl = this.props.songs.map( song => {
            return (
                song.trackUrl
            )
        })
        
            return (
            <footer className="footer">
                <div className="footer-left">
                    <span className="currentSong" draggable="true">
                        <img src={this.props.presentSong.photoUrl ? this.props.presentSong.photoUrl : "https://seedie.s3.amazonaws.com/ATC.jpg"}/>
                    </span>
                    <div className="songInfo" draggable="true">
                        <div className="songName">
                            <a className="songInfo-track" href="">{this.props.presentSong.title}</a>
                        </div>
                        <div className="songArtist" draggable="true">
                            <a className="songInfo-artist" href="">{this.props.presentSong.artist_name}</a>
                        </div>
                    </div>
                    <button className="likeSong"><FontAwesomeIcon icon={faHeart} /></button>
                </div>

                <div className="footer-center">
                    <div className="controls">
                        <button onClick={() => this.previousSong()} className="previous"><FontAwesomeIcon icon={faStepBackward} /></button>
                        <button onClick={() => this.audio()} className="playpause">{this.state.playing === false ? <FontAwesomeIcon className="pp" icon={faPlay}/> : <FontAwesomeIcon className="pause" icon={faPause} />}</button>
                        <button onClick={() => this.nextSong()} className="forward"><FontAwesomeIcon icon={faStepForward} /></button>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-time">{this.state.time}</div>
                        <div className="progress-container">
                            <input className="slider" type="range" min="0" max={this.state.duration} value={this.state.timePosition} step="0.00001"
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

// const mapStateToProps = ({ session, entities: { users } }) => {

//     return {
//         currentUser: users[session.id]
//     };
// };

// const mapDispatchToProps = dispatch => ({
//     logout: () => dispatch(logout())
// });

// this.props.presentSong.trackUrl === undefined ? songUrl[this.state.currentSong] : this.props.presentSong.trackUrl

// Object.values(this.props.presentSongId).length === 0 ? songUrl[this.state.currentSong] : Object.values(this.props.presentSongId).join('')

// export default connect(mapStateToProps, mapDispatchToProps)(Footer);

export default Footer;
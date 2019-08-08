import React from 'react';
import { } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlay, faStepForward, faStepBackward, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

// import { connect } from 'react-redux';

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false, 
            time: "",
            volume: 49,
            previousVolume: 49,
            duration: "",
            timeDuration: "",
            timePosition: "",
        }
        this.setVolume = this.setVolume.bind(this);
    }

    componentDidMount() {
        // let theTime = this.songTime(this.sound.currentTime)
        setInterval(() => this.setState({
            duration: this.sound.duration,
            time: this.songTime(this.sound.currentTime),
            timeDuration: `${Math.floor(this.sound.duration / 60)}:${Math.floor(this.sound.duration % 60)}`,
            timePosition: `${this.sound.currentTime}`,
            }), 1000)
        }

    audio() {
        
        if (this.state.playing === false) {
            
            // this.sound.load();
            this.sound.play();
            this.setState({ playing: true })
        } else if (this.state.playing === true) {
            
            this.sound.pause();
            this.setState({ playing: false })
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

    toggleMute() {
        if (this.sound.volume > 0) {
            this.setState({ previousVolume: this.sound.volume, volume: 0 })
            this.sound.volume = 0
        } else {
            this.setState({ volume: this.state.previousVolume })
            this.sound.volume = this.state.previousVolume

        }
    }

    render () {
        return (
            <footer className="footer">
                <div className="footer-left">
                    <span className="currentSong" draggable="true">
                        <img src="https://seedie.s3.amazonaws.com/ATC.jpg"/>
                    </span>
                    <div className="songInfo" draggable="true">
                        <div className="songName">
                            <a href="">Song Name</a>
                        </div>
                        <div className="songArtist" draggable="true">
                            <a href="">Artist Name</a>
                        </div>
                    </div>
                    <button className="likeSong"><FontAwesomeIcon icon={faHeart} /></button>
                </div>

                <div className="footer-center">
                    <div className="controls">
                        <button className="previous"><FontAwesomeIcon icon={faStepBackward} /></button>
                        <button onClick={() => this.audio()} className="playpause"><FontAwesomeIcon className="pp" icon={faPlay}/></button>
                        <button className="forward"><FontAwesomeIcon icon={faStepForward} /></button>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-time">{this.state.time}</div>
                        <div className="progress-container">
                            <input className="slider" type="range" min="0" max={this.state.duration} value={this.state.timePosition} step="0.00001"/>
                        </div>
                        <div className="progress-time">{(this.state.timeDuration)}</div>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="volume-bar">
                        <div className="progress-container">
                            <button onClick={() => this.toggleMute()} className="volume-mute"><FontAwesomeIcon icon={faVolumeMute} /></button>
                            <input type="range" min="0" max="99" value={this.state.volume} step="1" 
                                onInput={(e) => this.setVolume(e.currentTarget.value)}
                                onChange={(e) => this.setVolume(e.currentTarget.value)} 
                            />
                        </div>
                    </div>
                </div>
                <audio ref={(s) => this.sound = s} src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBaZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b8ae8e3eebfa8f1f4359349f3499a982a0dde4ab/ATC.mp3" />
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

// export default connect(mapStateToProps, mapDispatchToProps)(Footer);

export default Footer;
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
        }

    }

    componentDidMount() {
        // this.props.fetchSongs();
        setInterval(() => this.setState({ time: this.songTime(this.sound.currentTime) }), 1000)
    }

    audio() {
        debugger
        if (this.state.playing === false) {
            debugger
            this.sound.load();
            this.sound.play();
            this.setState({ playing: true })
        } else if (this.state.playing === true) {
            debugger
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

    render () {
        return (
            <footer className="footer">
                <div className="footer-left">
                    <span className="currentSong" draggable="true">
                        <img src=""/>
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
                            <input className="slider" type="range" min="0" max="99" />
                        </div>
                        <div className="progress-time">{this.state.time}</div>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="volume-bar">
                        <div className="progress-container">
                            <button className="volume-mute"><FontAwesomeIcon icon={faVolumeMute} /></button>
                            <input type="range" min="0" max="99" step="1" />
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
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            playing: false,
            time: "",
            length: "",
        }

        // this.sound = React.createRef();
    }

    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        this.props.fetchSongs();
        setInterval(() => this.setState({ time: this.songTime(this.sound.currentTime)}), 1000)
    }

    audio() {
        
        if (this.state.playing === false) {
            
            this.sound.load();
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

    render () {
        let songs = this.props.songs.map(song => {
            return (
                <div className="track-row">
                    <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys"/></div>
                    <div onClick={() => this.audio()} className="track-info">
                        <div className="track-title">{song.title}</div>
                        <div className="track-artist">{song.artist_name}</div>
                    </div>
                    <div className="song-length">{this.state.time}</div>
                    <audio ref={(s) => this.sound = s} src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBaZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b8ae8e3eebfa8f1f4359349f3499a982a0dde4ab/ATC.mp3" />
                </div>
            )
        })
        return (
            <div className="playlist-content">
                <div className="left-right">
                    <div className="left">
                        <div className="left-content">
                            <div className="left-content-image-container">
                                <img className="left-content-image" src={this.props.playlist.photoUrl ? this.props.playlist.photoUrl : "/Users/justin/Desktop/FullStackPro/Spoofify/app/assets/images/Sun.jpg"}/>
                            </div>
                            <div className="playlist-title">{this.props.playlist.title}</div>
                            <div className="playlist-owner">owner</div>
                        </div>
                        <button className="play">Play</button>
                    </div>
                    <div className="right">
                        {songs}
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaylistShow;
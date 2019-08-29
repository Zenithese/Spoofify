import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            playing: false,
            // song2Pass: this.props.songs[0],
        }
        this.sounds = [];
    }

    componentDidMount() {
        debugger
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        this.props.fetchSongs();

        // this.props.recieveCurrentSong();
    }

    // componentDidUpdate() {
    //     if (this.props.presentSong !== this.prevProps.presentSong) {
    //         this.setState({ playing: !playing })
    //     }
    // }


    audio(song) {
        
        // this.setState({ song2Pass: song })
        this.state.playing = !this.state.playing
        
        this.props.recieveCurrentSong(song)
        this.props.Song_Alive_or_Dead(this.state.playing)
        
    }

    render () {
        
        let songs = this.props.songs.map( (song, i) => {
            return (
                <div className="track-row">
                    <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys"/></div>
                    <div onClick={() => this.audio(song)} className="track-info">
                        <div className="track-title">{song.title}</div>
                        <div className="track-artist">{song.artist_name}</div>
                    </div>
                    <audio ref={(s) => this.sounds.push(s)} src={song.trackUrl} />
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
                            <div className="playlist-owner">{this.props.currentUser.username}</div>
                        </div>
                        <button onClick={() => this.audio(this.state.song2Pass)} className="play">{ this.state.playing ? "Pause" : "Play" }</button>
                    </div>
                    <div className="right">
                        {songs}
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaylistShow;
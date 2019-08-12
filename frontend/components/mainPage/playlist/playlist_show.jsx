import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            playing: false,
            // time: "",
            // volume: 100,
            // previousVolume: 0,
            // duration: "",
            // timeDuration: "",
            // timePosition: "",
            // currentSong: 0,
        }
        this.sounds = [];
    }

    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        this.props.fetchSongs();
        
        // setInterval(() => this.setState({
        //     // duration: this.sound.duration,
        //     time: this.songTime(this.sound.currentTime),
        //     timeDuration: `${Math.floor(this.sound.duration / 60)}:${Math.floor(this.sound.duration % 60)}`,
        //     timePosition: `${this.sound.currentTime}`,
        // }), 1000)

        // this.props.recieveCurrentSong();
    }

    // componentDidUpdate() {
    //     if (this.props.presentSong !== this.prevProps.presentSong) {
    //         this.setState({ playing: !playing })
    //     }
    // }


    audio(i, song) {
        this.state.playing = !this.state.playing
        debugger
        this.props.recieveCurrentSong(song)
        debugger
        // if (this.state.playing === false) {
            
            // this.sounds[this.state.currentSong].pause();
            // this.sounds[this.state.currentSong].load();
            // this.sounds[i].play();
            // this.setState({ playing: true, currentSong: i })
            // this.props.recieveCurrentSong(song)
        // } else if (this.state.playing === true && i === this.state.currentSong) {
            
        //     this.sounds[i].pause();
        //     this.setState({ playing: false })
        // } else if (this.state.playing === true && i !== this.state.currentSong) {
            
        //     this.sounds[this.state.currentSong].pause();
        //     this.sounds[this.state.currentSong].load();
        //     this.sounds[i].play();
        //     this.setState({ currentSong: i })
        // }
    }

    // songTime(time) {
    //     let rounded = Math.floor(time);
    //     let minutes = Math.floor(rounded / 60);
    //     let seconds = Math.floor(rounded % 60);
    //     seconds >= 10 ? seconds = seconds : seconds = `0${seconds}`;
    //     return `${minutes}:${seconds}`;
    // }

    render () {
        
        let songs = this.props.songs.map( (song, i) => {
            return (
                <div className="track-row">
                    <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys"/></div>
                    <div onClick={() => this.audio(i, song)} className="track-info">
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
                        <button onClick={() => this.audio()} className="play">{ this.state.playing ? "Pause" : "Play" }</button>
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

// "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBaZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b8ae8e3eebfa8f1f4359349f3499a982a0dde4ab/ATC.mp3"

{/* <div className="song-length">{this.state.playing ? this.state.time : this.state.timePosition > 0 ? this.state.time : this.state.timeDuration}</div> */}

{/* <div className="track-row">
    <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
    <div className="track-info">
        <div className="track-title">Title</div>
        <div className="track-artist">Artist</div>
    </div>
    <div className="song-length">0:00</div>
</div> */}
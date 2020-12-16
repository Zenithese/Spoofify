import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            playing: false,
        }
        this.sounds = [];
    }

    componentDidMount() {
        
        // this.props.fetchPlaylist(this.props.match.params.playlistId);
        this.props.fetchSongs();

    }

    handleClick(ids) {
        
        this.props.deletePlaylistsong(ids)

    }

    handleDelete() {

        this.props.deletePlaylist(this.props.playlist.id)
        this.props.history.push("/library/playlist")

    }

    audio(song) {
        
        this.state.playing = !this.state.playing
        this.props.receiveCurrentPlaylist(this.props.songs)
        this.props.recieveCurrentSong(song)
        this.props.Song_Alive_or_Dead(this.state.playing)
        
    }

    
    render () {
        let removeButton = <button onClick={() => this.handleClick([song.id, this.props.playlist.id])} className="add-button">REMOVE</button>
        if (this.props.playlist.title === "Chillin' On A Dirt Road") {
            removeButton = null
        }
        if (this.props.playlist.title === "Anti Pop") {
            removeButton = null
        }
        if (this.props.playlist.title === "Chill Out Classics") {
            removeButton = null
        }
        if (this.props.playlist.title === "mint Acoustic") {
            removeButton = null
        }
        if (this.props.playlist.title === "POLLEN") {
            removeButton = null
        }
        
        let songs = this.props.songs.map( (song, i) => {
            return (
                <div className="track-row" key={i}>
                    <div className="track-row">
                        <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys"/></div>
                        <div onClick={() => this.audio(song)} className="track-info">
                            <div className="track-title">{song.title}</div>
                            <div className="track-artist">{song.artist_name}</div>
                        </div>
                        <audio ref={(s) => this.sounds.push(s)} src={song.track_url} />
                    </div>
                    {removeButton}
                    </div>
            )
        })

        let button = < button onClick={() => this.handleDelete()} className="add-button">DELETE</button>
        if (this.props.playlist.title === "Chillin' On A Dirt Road") {
            button = null
        }
        if (this.props.playlist.title === "Anti Pop") {
            button = null
        }
        if (this.props.playlist.title === "Chill Out Classics") {
            button = null
        }
        if (this.props.playlist.title === "mint Acoustic") {
            button = null
        }
        if (this.props.playlist.title === "POLLEN") {
            button = null
        }
        
        return (
            <div className="playlist-content">
                <div className="left-right">
                    <div className="left">
                        <div className="left-content">
                            <div className="left-content-image-container">
                                <img className="left-content-image" src={this.props.playlist.photoUrl}/>
                            </div>
                            <div className="playlist-title">{this.props.playlist.title}</div>
                            <div className="playlist-owner">{this.props.currentUser.username}</div>
                        </div>
                        <div className="playlist-buttons">
                            <button onClick={() => this.audio(this.props.presentSong.id === undefined ? this.props.songs[0] : this.props.presentSong)} className="play">{this.props.playing ? (typeof this.props.playing === 'object' ? "Play" : "Pause") : "Play" }</button>
                            {button}
                        </div>
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
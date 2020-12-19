import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import Track from '../search/track'

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
        this.props.fetchLikes();
    }

    handleClick(ids) {
        this.props.deletePlaylistsong(ids)
    }

    handleDelete() {
        this.props.deletePlaylist(this.props.playlist.id)
        this.props.history.push("/library/playlist")
    }

    audio(e, song) {
        if (e.target.className === "track-actions") return;
        if (e.target.className === "track-like") return;
        if (e.target.className === "track-unliked") return;
        this.props.receiveCurrentPlaylist(this.props.songs)
        this.props.recieveCurrentSong(song)
        this.props.Song_Alive_or_Dead(!this.state.playing)
        this.setState({ playling: !this.state.playing })
    }

    handleLike(trackId) {
        const isLiked = this.props.likes.includes(trackId);
        isLiked ?
            this.props.deleteLike({ id: trackId })
            : this.props.createLike({ user_id: this.props.currentUser.id, song_id: trackId })
    }

    handleLikeStyle(trackId) {
        return this.props.likes.includes(trackId)
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
        
        const tracks = this.props.songs.map((track, i) => {
            return (
                <Track
                    audio={(e) => this.audio(e, track)}
                    handleSubmit={() => this.handleSubmit(track.id)}
                    track_url={track.track_url}
                    album={track.image_url}
                    name={track.title}
                    artist={track.artist_name}
                    handleLike={() => this.handleLike(track.id)}
                    likeStyle={this.handleLikeStyle(track.id)}
                    key={i}
                />
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
                        {tracks}
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaylistShow;
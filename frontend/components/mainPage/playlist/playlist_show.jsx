import React from 'react'
import Track from '../track/track_container'

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props) 
        this.sounds = [];
    }

    componentDidMount() {
        this.props.fetchPlaylists();
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

    handleLike(trackId) {
        this.props.likes[trackId] ?
            this.props.deleteLike({ id: trackId })
            : this.props.createLike({ user_id: this.props.currentUser.id, song_id: trackId })
    }

    handleLikeStyle(trackId) {
        return this.props.likes[trackId]
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
        
        const tracks = this.props.songs.map((track, i) => {
            return (
                <Track
                    song={track}
                    handleSubmit={() => this.handleSubmit(track.id)}
                    track_url={track.track_url}
                    album={track.image_url}
                    name={track.title}
                    artist={track.artist_name}
                    handleLike={() => this.handleLike(track.id)}
                    likeStyle={this.handleLikeStyle(track.id)}
                    key={i}
                    songId={track.id}
                />
            )
        })
        
        return (
            <div className="playlist-content" id="scroll-container">
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
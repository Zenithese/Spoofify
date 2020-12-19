import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { fetchLikes, createLike, deleteLike } from '../../../actions/like_actions'
import { recieveCurrentSong, Song_Alive_or_Dead, receiveSongForPlaylist } from '../../../actions/song_actions'
import { receiveCurrentPlaylist } from '../../../actions/playlist_actions'
import { openModal } from '../../../actions/modal_actions';
import Track from '../search/track';

const mapStateToProps = (state) => {
    let currentUser = state.entities.users[state.session.id]
    let likes = Object.values(state.entities.likes).filter(like => like.user_id === currentUser.id).map(like => like.song_id)
    let songs = Object.values(state.entities.songs).filter(song => likes.includes(song.id))
    return {
        currentUser,
        songs,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchLikes: () => dispatch(fetchLikes()),
        openModal: (modal) => dispatch(openModal(modal)),
        recieveCurrentSong: (song) => dispatch(recieveCurrentSong(song)),
        Song_Alive_or_Dead: (bool) => dispatch(Song_Alive_or_Dead(bool)),
        receiveSongForPlaylist: (songId) => dispatch(receiveSongForPlaylist(songId)),
        receiveCurrentPlaylist: (playlist) => dispatch(receiveCurrentPlaylist(playlist)),
        // createLike: (like) => dispatch(createLike(like)),
        deleteLike: (id) => dispatch(deleteLike(id)),
    }
}

class LikedSongs extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            playing: false,
        }
    }

    componentDidMount() {
        this.props.fetchLikes();
    }

    handleSubmit(songId) {
        this.props.receiveSongForPlaylist(songId)
        this.props.openModal('addSong');
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

    unlike(id) {
        this.props.deleteLike({ id: id })
    }

    render (){
        const tracks = this.props.songs.map((track, i) => {
            return (
                <Track 
                    audio={(e) => this.audio(e, track)} 
                    handleSubmit={() => this.handleSubmit(track.id)} 
                    track_url={track.track_url} 
                    album={track.image_url} 
                    name={track.title} 
                    artist={track.artist_name} 
                    handleLike={() => this.unlike(track.id)}
                    likeStyle={true}
                    key={i}
                />
            )
        })

        return (
            <div className="like-body" >
                <div className="song-results">
                    {tracks}
                </div>
            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedSongs);
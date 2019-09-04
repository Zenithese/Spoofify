import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { fetchLikes } from '../../../actions/like_actions'
import { recieveCurrentSong, Song_Alive_or_Dead, receiveSongForPlaylist } from '../../../actions/song_actions'
import { receiveCurrentPlaylist } from '../../../actions/playlist_actions'
import { openModal } from '../../../actions/modal_actions';

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

    audio(song) {
        
        this.state.playing = !this.state.playing
        this.props.receiveCurrentPlaylist(this.props.songs)
        this.props.recieveCurrentSong(song)
        this.props.Song_Alive_or_Dead(this.state.playing)

    }

    render (){
        let songsToRender = this.props.songs.map(song => {
            return (
                <Link className="track-row">
                    <Link onClick={() => this.audio(song)} className="track-row">
                        <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                        <div className="track-info">
                            <div className="track-title">{song.title}</div>
                            <div className="track-artist">{song.artist_name}</div>
                        </div>
                    </Link>
                    <button onClick={() => this.handleSubmit(song.id)} className="add-button">ADD</button>
                    {/* <audio ref={(s) => this.sound = s} src={song.trackUrl} /> */}
                    {/* <button onClick={() => this.audio(this.state.song2Pass)} className="play">{this.state.playing ? "Pause" : "Play"}</button> */}
                </Link>
            )
        })

        return (
            < div className="search-body" >
                <div className="song-results">
                    {songsToRender}
                </div>
            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedSongs);
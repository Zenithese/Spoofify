import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../../actions/playlist_actions';
import { createPlaylistsong } from '../../../actions/playlist_song_actions'
import { openModal, closeModal } from '../../../actions/modal_actions';

class AddSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.curretUserId,
            // photoUrl: '',
            songId: this.props.songId,
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        
        e.preventDefault();
        // if (!this.props.playlists[e.currentTarget.hash.split('#/')[1] - 1].song_ids.includes(this.state.songId)) { this.props.playlists[e.currentTarget.hash.split('#/')[1] - 1].song_ids.push(this.state.songId) }
        this.props.createPlaylistsong({ playlist_id: e.currentTarget.hash.split('#/')[1], song_id: this.props.songId})
        
        this.props.closeModal()
    }

    render() {
        

        let playlists = this.props.playlists.map((playlist, i) => {
            return (
                <Link to={`/${playlist.id}`} onClick={this.handleSubmit} className="main-playlist" alt={`${i}`}>
                    <div className="main-playlist-image">
                        <img className="playlist-image" src={playlist.photoUrl}/>
                    </div>
                    <div className="main-playlist-title">{playlist.title}</div>
                </Link>
            )
        })

        return (
            <div className="create-playlist">

                <button className="close" onClick={this.props.closeModal}>x</button>

                <h1 className="create-playlist-header">Add to playlist</h1>

                <form className="create-playlist-form">
                    <div>
                        <div className="lock">
                            <div className="addSong-playlist">{playlists}</div>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
    curretUserId: state.session.id,
    playlists: Object.values(state.entities.playlists),
    songId: state.ui.addSong
    }

}

const mapDispatchToProps = dispatch => ({
    createPlaylistsong: playlistsong => dispatch(createPlaylistsong(playlistsong)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddSong);
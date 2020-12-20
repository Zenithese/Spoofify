import { connect } from 'react-redux';
import { } from '../../../actions/playlist_actions';
import { withRouter } from 'react-router-dom'
import { fetchPlaylists } from '../../../actions/playlist_actions'
import { clearSearches, fetchResults } from '../../../actions/search_actions'
import { recieveCurrentSong, songPlayback, receiveSongForPlaylist, createSong } from '../../../actions/song_actions'
import { receiveCurrentPlaylist } from '../../../actions/playlist_actions'
import { openModal } from '../../../actions/modal_actions';
import { createLike, deleteLike, fetchLikes } from '../../../actions/like_actions'
import Search from './newer_search';


const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id]
    const likes = Object.values(state.entities.likes).filter(like => like.user_id === currentUser.id).map(like => like.song_id)
    return {
        likes,
        currentUser,
        playlists: Object.values(state.entities.playlists),
        songs: state.entities.songs,
        searchInput: ownProps.searchInput,
        spotifySong: state.ui.spotifySong,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        receiveCurrentPlaylist: (playlist) => dispatch(receiveCurrentPlaylist(playlist)),
        receiveSongForPlaylist: (songId) => dispatch(receiveSongForPlaylist(songId)),
        recieveCurrentSong: (song) => dispatch(recieveCurrentSong(song)),
        songPlayback: (bool) => dispatch(songPlayback(bool)),
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        clearSearches: () => dispatch(clearSearches()),
        fetchResults: () => dispatch(fetchResults()),
        openModal: (modal) => dispatch(openModal(modal)),
        createSong: (song) => dispatch(createSong(song)),
        createLike: (id) => dispatch(createLike(id)),
        deleteLike: (id) => dispatch(deleteLike(id)),
        fetchLikes: () => dispatch(fetchLikes()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
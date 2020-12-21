import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchPlaylists } from '../../../actions/playlist_actions'
import { clearSearches, fetchResults } from '../../../actions/search_actions'
import { recieveCurrentSong, songPlayback, receiveSongForPlaylist, createSpotifySong } from '../../../actions/song_actions'
import { receiveCurrentPlaylist } from '../../../actions/playlist_actions'
import { openModal } from '../../../actions/modal_actions';
import { createLike, deleteLike, fetchLikes } from '../../../actions/like_actions'
import Search from './newer_search';


const mapStateToProps = (state, ownProps) => {
    return {
        likes: state.entities.likes,
        currentUser: state.entities.users[state.session.id],
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
        createSpotifySong: (song) => dispatch(createSpotifySong(song)),
        createLike: (id) => dispatch(createLike(id)),
        deleteLike: (id) => dispatch(deleteLike(id)),
        fetchLikes: () => dispatch(fetchLikes()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
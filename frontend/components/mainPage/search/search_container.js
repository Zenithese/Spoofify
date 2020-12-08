import { connect } from 'react-redux';
import { } from '../../../actions/playlist_actions';
import { withRouter } from 'react-router-dom'
import { fetchPlaylists } from '../../../actions/playlist_actions'
import { clearSearches, fetchResults } from '../../../actions/search_actions'
import { recieveCurrentSong, Song_Alive_or_Dead, receiveSongForPlaylist } from '../../../actions/song_actions'
import { receiveCurrentPlaylist } from '../../../actions/playlist_actions'
import { openModal } from '../../../actions/modal_actions';
import Search from './new_search';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        playlists: Object.values(state.entities.playlists),
        songs: Object.values(state.entities.songs),
        searchInput: ownProps.searchInput
    };
};

const mapDispatchToProps = dispatch => {
    return {
        receiveCurrentPlaylist: (playlist) => dispatch(receiveCurrentPlaylist(playlist)),
        receiveSongForPlaylist: (songId) => dispatch(receiveSongForPlaylist(songId)),
        recieveCurrentSong: (song) => dispatch(recieveCurrentSong(song)),
        Song_Alive_or_Dead: (bool) => dispatch(Song_Alive_or_Dead(bool)),
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        clearSearches: () => dispatch(clearSearches()),
        fetchResults: () => dispatch(fetchResults()),
        openModal: (modal) => dispatch(openModal(modal)),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
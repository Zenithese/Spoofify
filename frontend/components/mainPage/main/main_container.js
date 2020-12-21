import { connect } from 'react-redux';
import Main from './main';
import { fetchPlaylists, deletePlaylist } from '../../../actions/playlist_actions'

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        playlists: Object.values(state.entities.playlists),
    };
};

const mapDispatchToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
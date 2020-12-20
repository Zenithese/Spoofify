import { connect } from 'react-redux';
import Library from './library';
import { fetchPlaylists, deletePlaylist } from '../../../actions/playlist_actions'

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        playlists: Object.values(state.entities.playlists),
        songs: Object.values(state.entities.songs),
    };
};

const mapDispatchToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);
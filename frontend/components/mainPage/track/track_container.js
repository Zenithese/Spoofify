import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { receiveCurrentPlaylist } from '../../../actions/playlist_actions'
import { recieveCurrentSong } from '../../../actions/song_actions'
import Track from './track';

const mapStateToProps = (state) => {
    return {
        songs: state.entities.songs,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        recieveCurrentSong: (song) => dispatch(recieveCurrentSong(song)),
        receiveCurrentPlaylist: (playlist) => dispatch(receiveCurrentPlaylist(playlist)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Track))
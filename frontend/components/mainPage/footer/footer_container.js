import { connect } from 'react-redux';
import Footer from './footer';
import { recieveCurrentSong, songPlayback, clearCurrentSong, createSong } from '../../../actions/song_actions'
import { receiveCurrentPlaylist } from  '../../../actions/playlist_actions'
import { fetchLikes, createLike, deleteLike } from '../../../actions/like_actions'


const mapStateToProps = (state) => {
    return {
        songs: state.ui.currentPlaylist || Object.values(state.entities.songs),
        presentSong: state.ui.currentSONG,
        currentPlaylist: state.ui.currentPlaylist,
        currentUser: state.entities.users[state.session.id],
        likes: state.entities.likes,
        spotifySong: state.ui.spotifySong,
    }
}

const mapDispatchToProps = dispatch => ({
    receiveCurrentPlaylist: (playlist) => dispatch(receiveCurrentPlaylist(playlist)),
    recieveCurrentSong: (song) => dispatch(recieveCurrentSong(song)),
    songPlayback: (bool) => dispatch(songPlayback(bool)),
    pauseCurrentSong: () => dispatch(pauseCurrentSong()),
    clearCurrentSong: () => dispatch(clearCurrentSong()),
    fetchSongs: () => dispatch(fetchSongs()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id)),
    fetchLikes: () => dispatch(fetchLikes()),
    createSong: (song) => dispatch(createSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
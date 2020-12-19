import { connect } from 'react-redux';
import Footer from './footer';
import { recieveCurrentSong, songPlayback, clearCurrentSong, createSong } from '../../../actions/song_actions'
import { receiveCurrentPlaylist } from  '../../../actions/playlist_actions'
import { fetchLikes, createLike, deleteLike } from '../../../actions/like_actions'


const mapStateToProps = (state) => {
    let currentUser = state.entities.users[state.session.id]
    return {
        songs: state.ui.currentPlaylist || Object.values(state.entities.songs),
        presentSong: state.ui.currentSONG,
        currentPlaylist: state.ui.currentPlaylist,
        currentUser,
        likes: Object.values(state.entities.likes).filter(like => like.user_id === currentUser.id).map(like => like.song_id),
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
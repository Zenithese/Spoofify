import { connect } from 'react-redux';
import Footer from './footer';
import { recieveCurrentSong, Song_Alive_or_Dead, clearCurrentSong } from '../../../actions/song_actions'
import ui from '../../../reducers/ui_reducer';
import { fetchPlaylist, deletePlaylist } from '../../../actions/playlist_actions'

// const mapStateToProps = ({ session, entities: { users, songs } }) => {

//     return {
//         currentUser: users[session.id],
//         songs: Object.values(songs),
//     };
// };

const mapStateToProps = (state, props) => {
    let songs = Object.values(state.entities.songs);
    // let playlist = state.entities.playlists[props.match.params.playlistId] || { title: "", song_ids: [] }
    // let songs = [];
    // playlist.song_ids.forEach(id => {
    //     const song = state.entities.songs[id];
    //     if (song !== undefined) {
    //         songs.push(song);
    //     }
    // });
    return {
        songs,
        presentSong: state.ui.currentSongId,
        // presentSong: state.entities.songs[ui.currentSongId.id]
    }
}

const mapDispatchToProps = dispatch => ({
    recieveCurrentSong: (song) => dispatch(recieveCurrentSong(song)),
    pauseCurrentSong: () => dispatch(pauseCurrentSong()),
    clearCurrentSong: () => dispatch(clearCurrentSong()),
    fetchSongs: () => dispatch(fetchSongs()),
    // fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
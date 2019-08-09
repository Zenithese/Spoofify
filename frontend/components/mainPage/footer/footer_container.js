import { connect } from 'react-redux';
import Footer from './footer';
import { recieveCurrentSong, pauseCurrentSong, clearCurrentSong } from '../../../actions/song_actions'
import ui from '../../../reducers/ui_reducer';

// const mapStateToProps = ({ session, entities: { users, songs } }) => {

//     return {
//         currentUser: users[session.id],
//         songs: Object.values(songs),
//     };
// };

const mapStateToProps = (state, props) => {
    let songs = Object.values(state.entities.songs);
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
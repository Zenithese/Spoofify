import { connect } from 'react-redux';
import Footer from './footer';
import { recieveCurrentSong, Song_Alive_or_Dead, clearCurrentSong } from '../../../actions/song_actions'
import { receiveCurrentPlaylist } from  '../../../actions/playlist_actions'
import { fetchPlaylist, deletePlaylist } from '../../../actions/playlist_actions'


const mapStateToProps = (state, props) => {
    // let songs = Object.values(state.entities.songs);
    // let playlist = state.ui.currentPlaylist.length > 0 ? state.ui.currentPlaylist : state.entities.playlists[props.location.pathname.split("/")[1]] || { title: "", song_ids: [] }
    // let songs = [];
    let songs = state.ui.currentPlaylist || Object.values(state.entities.songs)
    // playlist.song_ids.forEach(id => {
    //     const song = state.entities.songs[id];
    //     if (song !== undefined) {
    //         songs.push(song);
    //     }
    // });
    return {
        songs,
        // playlist,
        presentSong: state.ui.currentSongId,
        currentPlaylist: state.ui.currentPlaylist,
        // presentSong: state.entities.songs[ui.currentSongId.id]
    }
}

const mapDispatchToProps = dispatch => ({
    receiveCurrentPlaylist: (playlist) => dispatch(receiveCurrentPlaylist(playlist)),
    recieveCurrentSong: (song) => dispatch(recieveCurrentSong(song)),
    Song_Alive_or_Dead: (bool) => dispatch(Song_Alive_or_Dead(bool)),
    pauseCurrentSong: () => dispatch(pauseCurrentSong()),
    clearCurrentSong: () => dispatch(clearCurrentSong()),
    fetchSongs: () => dispatch(fetchSongs()),
    // fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

// state.entities.playlists[props.location.pathname.split("/")[1]]
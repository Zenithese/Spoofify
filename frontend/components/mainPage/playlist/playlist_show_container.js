import { connect } from 'react-redux';
import {  } from '../../../actions/playlist_actions';
import { withRouter } from 'react-router-dom'
import { fetchPlaylist, deletePlaylist } from '../../../actions/playlist_actions'
import { fetchSongs } from '../../../actions/song_actions'
import PlaylistShow from './playlist_show';


const msp = (state, props) => {
    let playlist = state.entities.playlists[props.match.params.playlistId] || { title: "", song_ids: [] }
    let songs = [];
    playlist.song_ids.forEach(id => {
        const song = state.entities.songs[id];
        if (song !== undefined) {
            songs.push(song);
        }
    });
    return {
        playlist,
        // songs: playlist ? playlist.song_ids.map(id => state.entities.songs[id]).filter(song => song !== undefined) : [],
        songs,
    }
}

const mdp = (dispatch) => {
    return {
        fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
        fetchSongs: () => dispatch(fetchSongs())
    }
}

export default withRouter(connect(msp, mdp)(PlaylistShow))
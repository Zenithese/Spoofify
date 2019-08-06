import { connect } from 'react-redux';
import {  } from '../../../actions/playlist_actions';
import { withRouter } from 'react-router-dom'
import { fetchPlaylist, deletePlaylist } from '../../../actions/playlist_actions'
import PlaylistShow from './playlist_show';


const msp = (state, props) => {
    let playlist = state.entities.playlists[props.match.params.playlistId] || { title: "", song_ids: [] }
    return {
        playlist,
        // songs: playlist ? playlist.song_ids.map(id => state.entities.songs[id]) : [],
    }
}

const mdp = (dispatch) => {
    return {
        fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))
    }
}

export default withRouter(connect(msp, mdp)(PlaylistShow))
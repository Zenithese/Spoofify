import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchPlaylists, deletePlaylist, receiveCurrentPlaylist } from '../../../actions/playlist_actions'
import { recieveCurrentSong, songPlayback, clearCurrentSong } from '../../../actions/song_actions'
import { deletePlaylistsong } from '../../../actions/playlist_song_actions'
import { fetchSongs } from '../../../actions/song_actions'
import PlaylistShow from './playlist_show'
import { fetchLikes, createLike, deleteLike } from '../../../actions/like_actions'


const msp = (state, props) => {
    let currentUser = state.entities.users[state.session.id]
    let playlist = state.entities.playlists[props.match.params.playlistId] || { title: "", song_ids: [] }
    let songs = [];
    playlist.song_ids.forEach(id => {
        const song = state.entities.songs[id];
        if (song !== undefined) {
            songs.push(song);
        }
    });
    return {
        songs,
        playlist,
        presentSong: state.ui.currentSONG,
        currentUser: state.entities.users[state.session.id],
        likes: state.entities.likes,
    }
}

const mdp = (dispatch) => {
    return {
        receiveCurrentPlaylist: (playlist) => dispatch(receiveCurrentPlaylist(playlist)),
        recieveCurrentSong: (song) => dispatch(recieveCurrentSong(song)),
        deletePlaylistsong: (song) => dispatch(deletePlaylistsong(song)),
        clearCurrentSong: () => dispatch(clearCurrentSong()),
        fetchPlaylists: (playlist) => dispatch(fetchPlaylists(playlist)),
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
        fetchSongs: () => dispatch(fetchSongs()),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (id) => dispatch(deleteLike(id)),
        fetchLikes: () => dispatch(fetchLikes()),
    }
}

export default withRouter(connect(msp, mdp)(PlaylistShow))
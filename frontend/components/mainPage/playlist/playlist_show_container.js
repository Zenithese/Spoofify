import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchPlaylist, deletePlaylist, receiveCurrentPlaylist } from '../../../actions/playlist_actions'
import { recieveCurrentSong, Song_Alive_or_Dead, clearCurrentSong } from '../../../actions/song_actions'
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
        playing: state.ui.playing,
        presentSong: state.ui.currentSONG,
        currentUser: state.entities.users[state.session.id],
        likes: Object.values(state.entities.likes).filter(like => like.user_id === currentUser.id).map(like => like.song_id),
    }
}

const mdp = (dispatch) => {
    
    return {
        receiveCurrentPlaylist: (playlist) => dispatch(receiveCurrentPlaylist(playlist)),
        recieveCurrentSong: (song) => dispatch(recieveCurrentSong(song)),
        deletePlaylistsong: (song) => dispatch(deletePlaylistsong(song)),
        pauseCurrentSong: () => dispatch(pauseCurrentSong()),
        clearCurrentSong: () => dispatch(clearCurrentSong()),
        fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
        fetchSongs: () => dispatch(fetchSongs()),
        Song_Alive_or_Dead: (bool) => dispatch(Song_Alive_or_Dead(bool)),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (id) => dispatch(deleteLike(id)),
        fetchLikes: () => dispatch(fetchLikes()),
    }
}

export default withRouter(connect(msp, mdp)(PlaylistShow))
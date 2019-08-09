import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS"
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST"
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST"

const receieveAllPlaylist = (playlists) => {
    debugger
    return {
        type: RECEIVE_ALL_PLAYLISTS,
        playlists,
    }
}

const receivePlaylist = (payload) => {
    return {
        type: RECEIVE_PLAYLIST,
        payload,
    }
}

const removePlaylist = (playlist) => {
    return {
        type: REMOVE_PLAYLIST,
        playlistId: playlist.id,
    }
}

export const fetchPlaylists = () => dispatch => {
    debugger
    return APIUtil.fetchPlaylists().then(playlists => dispatch(receieveAllPlaylist(playlists)))
}

export const fetchPlaylist = (id) => dispatch => {
    return APIUtil.fetchPlaylist(id).then(playlist => dispatch(receivePlaylist(playlist)))
}

export const createPlaylist = (playlist) => dispatch => {
    return APIUtil.createPlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist)))
}

export const updatePlaylist = (playlist) => dispatch => {
    return APIUtil.updatePlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist)))
}

export const deletePlaylist = (playlist) => dispatch => {
    return APIUtil.deletePlaylist(playlist).then(playlistId => dispatch(removePlaylist(playlistId)))
}
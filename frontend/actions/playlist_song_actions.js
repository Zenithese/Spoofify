import * as APIUtil from '../util/playlist_song_api_util';

export const CREATE_PLAYLISTSONG = 'CREATE_PLAYLISTSONG'
export const REMOVE_PLAYLISTSONG = 'REMOVE_PLAYLISTSONG'

export const receivePlaylistsong = playlistsong => {
    return {
        type: CREATE_PLAYLISTSONG,
        playlistsong
    }
}

export const removePlaylistsong = playlistsong => {
    
    return {
        type: REMOVE_PLAYLISTSONG,
        playlistsong
    }
}

export const createPlaylistsong = playlistsong => dispatch => {
    return APIUtil.createPlaylistsong(playlistsong).then(playlistsong => dispatch(receivePlaylistsong(playlistsong)));
}

export const deletePlaylistsong = playlistsong => dispatch => {
    
    return APIUtil.deletePlaylistsong(playlistsong).then(playlistsong => dispatch(removePlaylistsong(playlistsong)));
}
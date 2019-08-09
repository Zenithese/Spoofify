import * as APIUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"
export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG"
export const CLEAR_CURRENT_SONG = "CLEAR_CURRENT_SONG"
export const PAUSE_CURRENT_SONG = "PAUSE_CURRENT_SONG"

const receiveAllSongs = (songs) => {
    return {
        type: RECEIVE_ALL_SONGS,
        songs,
    }
}

const receiveSong = (song) => {
    return {
        type: RECEIVE_SONG,
        song,
    }
}

export const recieveCurrentSong = (song) => {
    
    return {
        type: RECEIVE_CURRENT_SONG,
        song,
    }
}

export const pauseCurrentSong = () => {
    return {
        type: PAUSE_CURRENT_SONG,
    }
}

export const clearCurrentSong = () => {
    return {
        CLEAR_CURRENT_SONG,
    }
}

export const fetchSongs = () => dispatch => {
    return APIUtil.fetchSongs().then(songs => dispatch(receiveAllSongs(songs)))
}

export const fetchSong = (song) => dispatch => {
    return APIUtil.fetchSong(song).then(song => dispatch(receiveSong(song)))
}
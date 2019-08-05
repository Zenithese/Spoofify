import * as APIUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"

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

export const fetchSongs = () => dispatch => {
    return APIUtil.fetchSongs().then(songs => dispatch(receiveAllSongs(songs)))
}

export const fetchSong = (song) => dispatch => {
    return APIUtil.fetchSong(song).then(song => dispatch(receiveSong(song)))
}
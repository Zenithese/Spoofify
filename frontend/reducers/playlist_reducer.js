import {
    RECEIVE_ALL_PLAYLISTS,
    RECEIVE_PLAYLIST,
    REMOVE_PLAYLIST,
} from '../actions/playlist_actions';
import { REMOVE_PLAYLISTSONG } from '../actions/playlist_song_actions';
import merge from 'lodash/merge';

const PlaylistReducer = (state = {}, action) => {
    
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS: {
            
            return action.playlists
        }
            
        case RECEIVE_PLAYLIST: {
            
            return merge({}, state, { [action.payload.playlist.id]: action.payload.playlist })
        }
            
        case REMOVE_PLAYLIST:
            let newState = merge({}, state)
            delete newState[action.playlistId]
            return newState

        case REMOVE_PLAYLISTSONG: {
            const playlist = merge({}, state[action.playlistsong.playlist_id])
            playlist.song_ids = playlist.song_ids.filter(song_id => {
                return song_id !== action.playlistsong.song_id
            })
            const newState = Object.assign({}, state, {[playlist.id]: playlist})
            debugger
            return newState
        }
        default:
            return state
            
    }
};

export default PlaylistReducer;
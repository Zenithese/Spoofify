import {
    RECEIVE_ALL_PLAYLISTS,
    RECEIVE_PLAYLIST,
    REMOVE_PLAYLIST,
} from '../actions/playlist_actions';
import merge from 'lodash/merge';

const PlaylistReducer = (state = {}, action) => {
    debugger
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
        default:
            return state
            
    }
};

export default PlaylistReducer;
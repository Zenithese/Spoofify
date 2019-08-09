import {
    RECEIVE_ALL_SONGS,
    RECEIVE_SONG,
    SONG_ALIVE_OR_DEAD,    
} from '../actions/song_actions';
import merge from 'lodash/merge';

const SongsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_SONGS: {
            return action.songs
        }
            
        case RECEIVE_SONG:
            return merge([], state, {[action.song.id]: action.song})
        default:
            return state
    }
}

export default SongsReducer;
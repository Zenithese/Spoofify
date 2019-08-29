import { merge } from 'lodash'
import { RECEIVE_SONG_FOR_PLAYLIST } from '../actions/song_actions'

export default (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_SONG_FOR_PLAYLIST: {
            // newState = {};
            return action.songId
        }

        default:
            return state;
    }
}
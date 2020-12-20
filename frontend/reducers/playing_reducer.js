import { merge } from 'lodash'
import { songPlayback } from '../actions/song_actions'

export default (state = {}, action) => {
    Object.freeze(state);  
    switch (action.type) {
        case songPlayback: {
            return action.bool 
        }
        default:
            return state;
    }
}
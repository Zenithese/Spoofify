import { merge } from 'lodash'
import { SONG_ALIVE_OR_DEAD } from '../actions/song_actions'

export default (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case SONG_ALIVE_OR_DEAD: {
            
            // let newState = {}
            return action.bool 
        }
        default:
            return state;
    }
}
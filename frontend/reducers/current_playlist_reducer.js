import { merge } from 'lodash'
import { RECEIVE_CURRENT_PLAYLIST } from '../actions/playlist_actions'

export default (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_CURRENT_PLAYLIST: {
            let newState = []
            return merge([], newState, action.playlist)
        }
        default:
            return state;
    }
}
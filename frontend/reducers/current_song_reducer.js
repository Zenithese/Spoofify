import { merge } from 'lodash'
import { RECEIVE_CURRENT_SONG, CLEAR_CURRENT_SONG, songPlayback } from '../actions/song_actions'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_SONG:
            let newState = {}
            return merge({}, newState, action.song)
        case songPlayback:
            return merge({}, state, { playing: false })
        case CLEAR_CURRENT_SONG:
            return {}
        default:
            return state;
    }
}
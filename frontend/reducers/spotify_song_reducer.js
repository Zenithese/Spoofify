import { RECEIVE_SONG } from '../actions/song_actions'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONG: {
            return action.song
        }
        default:
            return state;
    }
}
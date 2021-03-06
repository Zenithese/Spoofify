import { RECEIVE_SPOTIFY_SONG } from '../actions/song_actions'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPOTIFY_SONG:
            return action.song
        default:
            return state;
    }
}
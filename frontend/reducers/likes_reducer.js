import merge from 'lodash/merge';
import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_LIKES:
            return action.likes
        case RECEIVE_LIKE:
            return merge({}, state, {[action.like.song_id]: action.like})
        case REMOVE_LIKE:
            const newLikes = merge({}, state)
            delete newLikes[action.like.song_id]
            return newLikes
        default:
            return state;
    }
};

export default likesReducer;
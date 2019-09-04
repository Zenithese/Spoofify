import * as APIUtil from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES"
export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const REMOVE_LIKE = "REMOVE_LIKE"

export const receieveAllLikes = (likes) => {

    return {
        type: RECEIVE_ALL_LIKES,
        likes,
    }

}

export const receiveLike = (like) => {

    return {
        type: RECEIVE_LIKE,
        like,
    }

}

export const removeLike = (like) => {
    
    return {
        type: REMOVE_LIKE,
        like,
    }

}

export const fetchLikes = () => dispatch => (
    APIUtil.fetchLikes().then(likes => (
        dispatch(receieveAllLikes(likes))
    ))
);

export const createLike = (like) => dispatch => {
    
    return APIUtil.createLike(like).then(like => (
        dispatch(receiveLike(like))
    ))
};

export const deleteLike = (song) => dispatch => {
    
    return APIUtil.deleteLike(song.id).then(like => (
        dispatch(removeLike(like))
    ))
};
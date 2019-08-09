import * as APIUtil from '../util/search_api_util'

export const FETCH_RESULTS = "FETCH_RESULTS" 
export const CLEAR_SEARCHES = "CLEAR_SEARCHES"

const fetchAllResults = () => {
    return {
        type: FETCH_RESULTS, 
        results,
    }
}

const clearAllSearches = () => {
    return {
        type: CLEAR_SEARCHES,
    }
}

export const fetchResults = (search) => dispatch => {
    return APIUtil.fetchResults(search).then(search => dispatch(fetchAllResults(search)));
}

export const clearSearches = () => dispatch => {
    return APIUtil.clearSearches().then(() => dispatch(clearAllSearches()));
}
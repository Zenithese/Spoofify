import { FETCH_RESULTS, CLEAR_SEARCHES } from '../actions/search_actions'

const searchReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case FETCH_RESULTS:
            return action.search
        case CLEAR_SEARCHES:
            return {}
        default:
            return state;
    }
}

export default searchReducer;
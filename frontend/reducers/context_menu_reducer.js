import { RECEIVE_CONTEXT_MENU_STATUS } from '../actions/context_menu_actions'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CONTEXT_MENU_STATUS:
            return action.details;
        default:
            return state;
    }
}
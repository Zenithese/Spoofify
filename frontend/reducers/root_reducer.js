import { combineReducers } from 'redux';

import entities from './entities_reducer';
import {sessionReducer} from './sessions_reducer';
import errors from './errors_reducer';
import session_errors from './session_errors_reducer'
import users from './users_reducer'

const rootReducer = combineReducers({
    entities,
    session: sessionReducer,
    errors,
    session_errors,
    users,
});

export default rootReducer;
import { combineReducers } from 'redux';
import users from './users_reducer';
import playlists from './playlist_reducer'
import songs from './songs_reducer'
import searches from './search_reducer'
import likes from './likes_reducer'

export default combineReducers({
    users,
    playlists,
    songs,
    searches,
    likes,
});
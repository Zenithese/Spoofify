import { combineReducers } from 'redux';

import modal from './modal_reducer';
import currentSongId from './current_song_reducer'
import addSong from './add_song_reducer'
import playing from './playing_reducer'
import currentPlaylist from './current_playlist_reducer'

export default combineReducers({
    modal,
    currentSongId,
    currentPlaylist,
    addSong,
    playing, 
});
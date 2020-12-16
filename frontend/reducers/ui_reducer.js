import { combineReducers } from 'redux';

import spotifySong from './spotify_song_reducer'
import modal from './modal_reducer';
import currentSONG from './current_song_reducer'
import addSong from './add_song_reducer'
import playing from './playing_reducer'
import currentPlaylist from './current_playlist_reducer'

export default combineReducers({
    modal,
    currentSONG,
    currentPlaylist,
    addSong,
    playing,
    spotifySong
});
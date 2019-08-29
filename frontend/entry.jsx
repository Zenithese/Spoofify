import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';
import { fetchSongs } from './actions/song_actions'
import { createPlaylistsong } from './util/playlist_song_api_util'

document.addEventListener('DOMContentLoaded', () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING START
    window.createPlaylistsong = createPlaylistsong
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getProps = store.getProps;
    window.fetchSongs = fetchSongs;
    window.logout = logout;
  // TESTING END

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
})
import React from 'react'
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import LikedSongs from './liked_songs'
import LibraryPlaylist from './library_playlist'

class Library extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    

    render() {
        return (
            <div className="main">
                <div className="main-container">
                    <div className="main-nav">
                        <ul className="main-nav-content">
                            <NavLink to="/library/playlist" className="featured">PLAYLIST</NavLink>
                            <NavLink to="/library/LikedSongs" className="featured">LIKED SONGS</NavLink>
                        </ul>
                    </div>
                    <Switch>
                        <Route path="/library/playlist" component={LibraryPlaylist} />
                        <Route path="/library/LikedSongs" component={LikedSongs} />
                    </Switch>
                    <Redirect from="/library" to="/library/LikedSongs" />
                </div>
            </div>
        )
    }
}

export default Library;
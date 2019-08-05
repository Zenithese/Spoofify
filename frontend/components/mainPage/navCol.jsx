import React from 'react';
import { } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBook } from '@fortawesome/free-solid-svg-icons'

class NavCol extends React.Component {


    render () {
        // let userplaylist = this.props.playlists.map(playlist => {
        //     return <playlist></playlist>
        // })
        return (
            <div className="nav">
                <h1 className="nav-header">Spoofify</h1>
                <ul className="nav-group-container">
                    <li className="nav-group"><FontAwesomeIcon icon={faHome} /> &nbsp; Home</li>
                    <li className="nav-group"><FontAwesomeIcon icon={faSearch} /> &nbsp;&nbsp;Search</li>
                    <li className="nav-group"><FontAwesomeIcon icon={faBook} /> &nbsp;&nbsp; Library</li>
                </ul>

                <div className="playlist">
                    <h2 className="playlist-header">PLAYLISTS</h2>
                    <button className="createPlaylist">Create Playlist</button>
                    {/* <ul>{userplaylist}</ul> */}
                </div>

                <div className="nav-footer">
                    <a className="nav-user"></a>
                </div>
            </div>
        )
    }
}

export default NavCol;
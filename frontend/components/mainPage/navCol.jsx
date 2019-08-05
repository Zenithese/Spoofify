import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBook, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

class NavCol extends React.Component {


    render () {
        // let userplaylist = this.props.playlists.map(playlist => {
        //     return <playlist></playlist>
        // })
        return (
            <div className="nav">
                <h1 className="nav-header">Spoofify</h1>
                <ul className="nav-group-container">
                    <li className="nav-group">&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faHome} className="faBoys"/> &nbsp; Home</li>
                    <br/>
                    <li className="nav-group">&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSearch} className="faBoys"/> &nbsp;&nbsp;Search</li>
                    <br/>
                    <li className="nav-group">&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faBook} className="faBoys"/> &nbsp;&nbsp; Library</li>
                </ul>

                <div className="playlist">
                    <h2 className="playlist-header">PLAYLISTS</h2>
                    <button className="createPlaylist"><FontAwesomeIcon icon={faPlusSquare} className="playlist-icon" /> &nbsp; <span className="playlist-words">&nbsp;&nbsp;Create Playlist</span></button>
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
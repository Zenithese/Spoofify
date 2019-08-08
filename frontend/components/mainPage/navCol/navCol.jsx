import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { openModal } from '../../../actions/modal_actions';
import { faHome, faSearch, faBook, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
})

class NavCol extends React.Component {


    render () {
        // let userplaylist = this.props.playlists.map(playlist => {
        //     return <playlist></playlist>
        // })
        return (
            <div className="nav">
                <h1 className="nav-header">Spoofify</h1>
                <ul className="nav-group-container">
                    <li className="nav-group"><Link to="/" className="navLinks">&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faHome} className="faBoys" /> &nbsp; Home</Link></li>
                    <br/>
                    <li className="nav-group"><Link exact to="/search" className="navLinks">&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSearch} className="faBoys" /> &nbsp;&nbsp;Search</Link></li>
                    <br/>
                    <li className="nav-group"><Link className="navLinks">&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faBook} className="faBoys" /> &nbsp;&nbsp; Library</Link></li>
                </ul>

                <div className="playlist">
                    <h2 className="playlist-header">PLAYLISTS</h2>
                    <button 
                        className="createPlaylist"
                        onClick={() => this.props.openModal('newPlaylist')}
                    ><FontAwesomeIcon icon={faPlusSquare} className="playlist-icon" /> &nbsp; <span className="playlist-words">&nbsp;&nbsp;Create Playlist</span></button>
                    {/* <ul>{userplaylist}</ul> */}
                </div>

                <div className="nav-footer">
                    <a className="nav-user"></a>
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(NavCol);
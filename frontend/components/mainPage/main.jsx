import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'

class Main extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    render () {

        let playlists = this.props.playlists.map(playlist => {
            return (
                <div className="main-playlist">
                    <div className="main-playlist-image">
                        <img className="playlist-image" src="" />
                    </div>
                    <div className="main-playlist-title">{playlist.title}</div>
                </div>
            )
        })


        return (
            <div className="main">
                <div className="main-container">
                    <div className="main-nav">
                        <ul className="main-nav-content">
                            <li className="featured">FEATURED</li>
                        </ul>
                    </div>

                    <div className="main-content">
                        <div className="main-playlist-header">Made for you</div>

                        <div className="main-playlists">
                            {playlists}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Main;
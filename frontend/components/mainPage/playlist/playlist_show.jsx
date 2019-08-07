import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props) 

        
    }

    componentDidMount() {
        
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        this.props.fetchSongs();
    }

    render () {
        let songs = this.props.songs.map(song => {
            return (
                <div className="track-row">
                    <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys"/></div>
                    <div className="track-info">
                        <div className="track-title">{song.title}</div>
                        <div className="track-artist">{song.artist_name}</div>
                    </div>
                    <div className="song-length">0:00</div>
                </div>
            )
        })
        return (
            <div className="playlist-content">
                <div className="left-right">
                    <div className="left">
                        <div className="left-content">
                            <div className="left-content-image-container">
                                <img className="left-content-image" src=""/>
                            </div>
                            <div className="playlist-title">{this.props.playlist.title}</div>
                            <div className="playlist-owner">owner</div>
                        </div>
                        <button className="play">Play</button>
                    </div>
                    <div className="right">
                        {songs}
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                        <div className="track-row">
                            <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                            <div className="track-info">
                                <div className="track-title">Title</div>
                                <div className="track-artist">Artist</div>
                            </div>
                            <div className="song-length">0:00</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaylistShow;
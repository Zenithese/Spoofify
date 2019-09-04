import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../../actions/playlist_actions'
import { clearSearches, fetchResults } from '../../../actions/search_actions'
import { recieveCurrentSong, Song_Alive_or_Dead, receiveSongForPlaylist } from '../../../actions/song_actions'
import { receiveCurrentPlaylist } from '../../../actions/playlist_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { openModal } from '../../../actions/modal_actions';
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const mapStateToProps = (state, ownProps) => {
    
    return {
        currentUser: state.entities.users[state.session.id],
        playlists: Object.values(state.entities.playlists),
        songs: Object.values(state.entities.songs),
        searchInput: ownProps.searchInput
    };
};

const mapDispatchToProps = dispatch => {
    return {
    receiveCurrentPlaylist: (playlist) => dispatch(receiveCurrentPlaylist(playlist)),
    receiveSongForPlaylist: (songId) => dispatch(receiveSongForPlaylist(songId)),
    recieveCurrentSong: (song) => dispatch(recieveCurrentSong(song)),
    Song_Alive_or_Dead: (bool) => dispatch(Song_Alive_or_Dead(bool)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    clearSearches: () => dispatch(clearSearches()),
    fetchResults: () => dispatch(fetchResults()),
    openModal: (modal) => dispatch(openModal(modal)),
    }
};

class Search extends React.Component {
    constructor(props){
        super(props)

        this.state = { 
            searchInput: "",
            playlistResults: [],
            songResults: [],
            playing: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.searchQuery = this.searchQuery.bind(this);
    }

    componentWillMount() {
        
        this.props.fetchPlaylists();
        // this.props.fetchSongs();

    }

    handleSubmit(songId) {
        // e.preventDefault();
        
        this.props.receiveSongForPlaylist(songId)
        
        this.props.openModal('addSong');
    }

    handleChange(e) {
        // e.preventDefault();
        
        this.setState({ searchInput: e.target.value })
        this.searchQuery();
    }

    searchQuery() {
        
        this.setState({ playlistResults: this.props.playlists.filter(playlist => playlist.title.toUpperCase().includes(this.state.searchInput.toUpperCase())) })
        this.setState({ songResults: this.props.songs.filter(song => song.title.toUpperCase().includes(this.state.searchInput.toUpperCase())) })

    }

    audio(song) {
        
        this.state.playing = !this.state.playing
        this.props.recieveCurrentSong(song)
        this.props.Song_Alive_or_Dead(this.state.playing)
        this.props.receiveCurrentPlaylist(this.props.songs)
        
    }

    render() {
        
        let playlistToRender = this.state.playlistResults.map(playlist => {
            return (
                <Link to={`/${playlist.id}`} className="main-playlist">
                    <div className="main-playlist-image">
                        <img className="playlist-image" src={playlist.photoUrl} />
                    </div>
                    <div className="main-playlist-title">{playlist.title}</div>
                </Link>
            )
        })

        let playlistHeader = playlistToRender.length ? "Playlist" : "";

        // let search = playlistToRender.length || songsToRender.length

        let songsToRender = this.state.songResults.map(song => {
            return (
                <Link className="track-row">
                    <Link onClick={() => this.audio(song)} className="track-row">
                        <div className="note-icon"><FontAwesomeIcon icon={faMusic} className="faBoys" /></div>
                        <div className="track-info">
                            <div className="track-title">{song.title}</div>
                            <div className="track-artist">{song.artist_name}</div>
                        </div>
                    </Link>
                    <button onClick={() => this.handleSubmit(song.id)} className="add-button">ADD</button>
                    {/* <audio ref={(s) => this.sound = s} src={song.trackUrl} /> */}
                    {/* <button onClick={() => this.audio(this.state.song2Pass)} className="play">{this.state.playing ? "Pause" : "Play"}</button> */}
                </Link>
            )
        })

        return (
            <div className="search-container">
                <section className="search">
                    <div className="search-header">
                        <div className="search-input-box">
                            <div className="content-spacing">
                                <input type="text" 
                                    className="search-input-box-input" 
                                    placeholder="Start typing..." 
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </div>
                        </div>
                    </div>
                        <div className="search-content">
                            <div className="content-spacing">
                                <div className="search-body">
                                    <a className="search-body-result" href="">
                                        {/* <h1>So Many Choices</h1>
                                        <span>;)</span> */}
                                        <div className="song-results">
                                            {songsToRender}
                                        </div>
                                    <div className="search-playlist-header">{playlistHeader}</div>
                                        <div className="main-playlists">
                                            {playlistToRender}
                                        </div>
                                        {/* <button onClick={() => this.clearSearches()} className="clear-button">CLEAR RECENT SEARCHES</button> */}
                                    </a>
                                </div>
                            </div> 
                        </div>
                </section> 
            </div> 
        )

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Search);
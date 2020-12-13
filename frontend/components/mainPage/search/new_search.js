import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Track from './track';
import { auth, search } from '../../../util/spotify_api_util';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            songResults: [],
            playing: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.searchQuery = this.searchQuery.bind(this);
        this.audio = this.audio.bind(this);
    }

    componentWillMount() {
        this.props.fetchPlaylists();
    }

    handleSubmit(songId) {
        e.preventDefault();
        this.props.receiveSongForPlaylist(songId)
        this.props.openModal('addSong');
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ query: e.target.value })
        this.searchQuery();
    }

    searchQuery() {
        auth()
            .then(res => search(res.data.access_token, this.state.query, "track", "US")
                .then(res => {
                    this.setState({ songResults: res.data.tracks.items })
                })
            )
    }

    audio(song) {
        console.log("audio")
        this.state.playing = !this.state.playing
        this.props.recieveCurrentSong(song)
        this.props.Song_Alive_or_Dead(this.state.playing)
        this.props.receiveCurrentPlaylist(this.props.songs)
    }

    render() {
        let tracks = this.state.songResults.length ?
            this.state.songResults.map((track, i) => {
                const song = {
                    id: track.id,
                    photoUrl: track.album.images[2].url,
                    title: track.name,
                    artist_name: track.artists[0].name,
                    trackUrl: track.preview_url
                }
                return (
                    <Track audio={() => this.audio(song)} trackUrl={track.preview_url} album={track.album} name={track.name} artist={track.artists} key={i} />
                )
            }) : null

        return (
            <div className="search-container" onContextMenu={(e) => rightClick(e)}>
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
                        <div className="search-body">
                            <div className="search-body-result">
                                <div className="song-results">
                                    {tracks}
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        )
    }
}



export default Search;
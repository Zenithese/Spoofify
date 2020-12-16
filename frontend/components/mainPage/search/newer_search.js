import React, { useState, useEffect } from 'react';
import Track from './track';
import ContextRoot from '../context_menu/context_root'
import { auth, search } from '../../../util/spotify_api_util';

export default function Search(props) {

    const [query, setQuery] = useState("");
    const [songResults, setSongResults] = useState([]);
    const [playing, setPlaying] = useState(false);

    // const [top, setTop] = useState("0px");
    // const [left, setLeft] = useState("0px");
    // const [directionReveal, setDirectionReveal] = useState("right-reveal");
    // const [parentClassName, setParentClassName] = useState("new-location");
    // const [display, setDisplay] = useState("none");

    // useEffect(() => {
    //     setParentClassName("new-location")
    // }, [parentClassName])

    // const handleClick = () => {
    //     setDisplay("none")
    // }

    // const rightClick = (e) => {
    //     e.preventDefault()
    //     if (e.target.className === "text") return
    //     setDisplay("block")
    //     setParentClassName("contextmenu")
    //     if (e.clientX > window.innerWidth / 2) {
    //         setDirectionReveal("left-reveal")
    //         setTop(e.pageY + "px")
    //         setLeft(e.clientX + 163 + "px")
    //     } else {
    //         setDirectionReveal("right-reveal")
    //         setTop(e.pageY + "px")
    //         setLeft(e.clientX + 5 + "px")
    //     }
    // }

    useEffect(() => {
        props.fetchPlaylists();
    }, [])

    useEffect(() => {
        props.createLike({ user_id: props.currentUser.id, song_id: props.spotifySong.id })
    }, [props.spotifySong])

    const handleSubmit = (song) => {
        props.createSong(song)
        props.openModal('addSong');
    }

    const handleLike = (song) => {
        props.createSong(song)
    }

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
        searchQuery();
    }

    const searchQuery = () => {
        auth()
            .then(res => search(res.data.access_token, query, "track", "US")
                .then(res => {
                    const availableTracks = res.data.tracks.items.filter(track => track.album.images[2].url && track.preview_url);
                    setSongResults(availableTracks)
                })
            )
    }

    const audio = (e, song) => {
        if (!e.target.className && e.target.__reactEventHandlers$x2zdvk7x0cm.fill == "currentColor") return
        props.recieveCurrentSong(song)
        props.Song_Alive_or_Dead(!playing)
        props.receiveCurrentPlaylist(props.songs)
        setPlaying(!playing)
    }


    const tracks = songResults.length ?
        songResults.map((track, i) => {
            const song = {
                spotify_id: track.id,
                image_url: track.album.images[2].url,
                title: track.name,
                artist_name: track.artists[0].name,
                track_url: track.preview_url,
                kind: "spotify_sample"
            }
            return (
                <Track
                    audio={(e) => audio(e, song)}
                    handleSubmit={() => handleSubmit(song)}
                    track_url={song.track_url}
                    album={song.image_url}
                    name={song.title}
                    artist={song.artist_name}
                    handleLike={() => handleLike(song)}
                    key={i}
                />
            )
        }) : null

    return (
        <div className="search-container">
            <section className="search">
                <div className="search-header">
                    <div className="search-input-box">
                        <div className="content-spacing">
                            <input type="text"
                                className="search-input-box-input"
                                placeholder="Start typing..."
                                onChange={(e) => handleChange(e)}
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

            {/* <ContextRoot top={top} left={left} directionReveal={directionReveal} parentClassName={parentClassName} display={display} /> */}
        </div>
    )
}
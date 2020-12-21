import React from 'react';
import { createPlaylistsong } from '../../../actions/playlist_song_actions';
import ContextMenu from './context_menu';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const playlists = Object.values(state.entities.playlists)
    playlists.unshift({title: "New Playlist", style: "psuedo"})
    return {
        playlists,
        spotifySongId: state.ui.spotifySong.id,
    };
};

const mapDispatchToProps = dispatch => ({
    createPlaylistsong: playlistsong => dispatch(createPlaylistsong(playlistsong)),
})

function ContextRoot({ top, left, directionReveal, parentClassName, display, playlists, createPlaylistsong, songId, spotifySongId }) {
    const contextMenu = [
        {
            text: "Add to Playlist",
            type: "li with context",
            array: playlists
        },
    ]

    const handleSubmit = (e, playlistId) => {
        e.preventDefault();
        createPlaylistsong({ playlist_id: playlistId, song_id: songId })
    }

    return (
        <div style={{ "display": display, "position": "absolute", "top": top, "left": left, "flexDirection": "row-reverse" }}>
            <ContextMenu
                parentClassName={parentClassName}
                directionReveal={directionReveal}
                handleSubmit={handleSubmit}
                array={contextMenu} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContextRoot);
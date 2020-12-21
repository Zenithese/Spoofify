import React from 'react'
import { connect } from 'react-redux';
import { fetchLikes, createLike, deleteLike } from '../../../actions/like_actions'
import { recieveCurrentSong, songPlayback, receiveSongForPlaylist } from '../../../actions/song_actions'
import { receiveCurrentPlaylist } from '../../../actions/playlist_actions'
import { openModal } from '../../../actions/modal_actions';
import Track from '../track/track_container';

const mapStateToProps = (state) => {
    const numberedSongs = [];
    const obj = state.entities.songs;
    for (const key in obj) {
        if (Number(key)) numberedSongs.push(obj[key]);
    };
    const currentUser = state.entities.users[state.session.id]
    const likes = state.entities.likes
    const songs = numberedSongs.filter(song => likes[song.id])
    return {
        currentUser,
        songs,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchLikes: () => dispatch(fetchLikes()),
        openModal: (modal) => dispatch(openModal(modal)),
        recieveCurrentSong: (song) => dispatch(recieveCurrentSong(song)),
        receiveSongForPlaylist: (songId) => dispatch(receiveSongForPlaylist(songId)),
        receiveCurrentPlaylist: (playlist) => dispatch(receiveCurrentPlaylist(playlist)),
        deleteLike: (id) => dispatch(deleteLike(id)),
    }
}

class LikedSongs extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchLikes();
    }

    handleSubmit(songId) {
        this.props.receiveSongForPlaylist(songId)
        this.props.openModal('addSong');
    }

    unlike(id) {
        this.props.deleteLike({ id: id })
    }

    render (){
        const tracks = this.props.songs.map((track, i) => {
            return (
                <Track 
                    song={track} 
                    handleSubmit={() => this.handleSubmit(track.id)} 
                    track_url={track.track_url} 
                    album={track.image_url} 
                    name={track.title} 
                    artist={track.artist_name} 
                    handleLike={() => this.unlike(track.id)}
                    likeStyle={true}
                    key={i}
                    songId={track.id}
                />
            )
        })

        return (
            <div className="like-body" >
                <div className="song-results">
                    {tracks}
                </div>
            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedSongs);
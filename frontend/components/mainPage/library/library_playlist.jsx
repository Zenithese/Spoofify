import React from 'react'
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'

const mapStateToProps = (state) => {

    return {
        currentUser: state.entities.users[state.session.id],
        playlists: Object.values(state.entities.playlists),
    };
};

class LibraryPlaylist extends React.Component {

    render() {

        let playlists = this.props.playlists.map(playlist => {
            // if (!playlist.photoUrl) {
            //     playlist.photoUrl = "/Users/justin/Desktop/FullStackPro/Spoofify/app/assets/images/Sun.jpg"
            // }
            return (
                <Link to={`/${playlist.id}`} className="main-playlist">
                    <div className="main-playlist-image">
                        <img className="playlist-image" src={playlist.photoUrl} />
                    </div>
                    <div className="main-playlist-title">{playlist.title}</div>
                </Link>
            )
        })

        return (
            < div className="main-content" >
                <div className="main-playlists">
                    {playlists}
                </div>
            </div >
        )
    }
}

export default connect(mapStateToProps, null)(LibraryPlaylist);
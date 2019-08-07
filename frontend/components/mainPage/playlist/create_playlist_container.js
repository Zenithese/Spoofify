import { connect } from 'react-redux';
import Main from '../main';
import { createPlaylist } from '../../../actions/playlist_actions';


const msp = (state, ownProps) => {
    return {
        playlist: { title: "" , song_ids: [], photoUrl: "" },
    }
}

const mdp = (dispatch) => {
    return {
        createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
    }
}

export default connect(msp, mdp)(Main)
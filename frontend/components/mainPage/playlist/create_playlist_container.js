import { connect } from 'react-redux';
import Main from '../main';
import { createPlaylist } from '../../../actions/playlist_actions';


const msp = () => {
    return {
        playlist: { title: "" },
    }
}

const mdp = (dispatch) => {
    return {
        createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
    }
}

export default connect(msp, mdp)(Main)
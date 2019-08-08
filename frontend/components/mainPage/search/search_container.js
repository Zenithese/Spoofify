import { connect } from 'react-redux';
import { } from '../../../actions/playlist_actions';
import { withRouter } from 'react-router-dom'
// import { fetchPlaylist, deletePlaylist } from '../../../actions/playlist_actions'
// import { fetchSongs } from '../../../actions/song_actions'
import Search from './search';


const msp = (state, props) => {
    return {
        
    }
}

const mdp = (dispatch) => {
    return {
        
    }
}

export default withRouter(connect(msp, mdp)(Search))
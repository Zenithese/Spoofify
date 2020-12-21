import { openModal } from '../../../actions/modal_actions';
import Track from './track';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Track))
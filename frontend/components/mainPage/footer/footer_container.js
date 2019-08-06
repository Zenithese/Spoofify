import { connect } from 'react-redux';
import Footer from './footer';

const mapStateToProps = ({ session, entities: { users } }) => {

    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
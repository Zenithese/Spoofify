import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { createPlaylist } from '../../../actions/playlist_actions'

class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            user_id: this.props.curretUserId
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPlaylist(this.state);
        this.props.closeModal()
    }

    handleChange() {
        return e => {
            this.setState({ title: e.target.value })
        }
    }

    render() {

        return (
            <div className="create-playlist">

                <button className="close" onClick={this.props.closeModal}>x</button>

                <h1 className="create-playlist-header">Create new playlist</h1>

                <form className="create-playlist-form">
                    <div className="create-playlist-input">
                        <div className="lock">
                            <h2 className="create-playlist-input-header">Playlist Name</h2>
                            <input 
                                type="text"
                                className="create-playlist-input-text" 
                                placeholder="New Playlist" 
                                onChange={this.handleChange()}>
                            </input>
                        </div>
                    </div>
                </form>

                <div className="create-playlist-buttons">
                    <button className="cancel" onClick={this.props.closeModal}>CANCEL</button>
                    <button className="create" onClick={this.handleSubmit}>CREATE</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    curretUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);
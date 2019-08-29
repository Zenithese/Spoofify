import React from 'react'
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePlaylist from '../playlist/create_playlist'
import AddSong from '../songs/add_song'
// import { createPlaylist } from '../../util/playlist_api_util';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component = modal === 'newPlaylist' ? <CreatePlaylist /> : <AddSong />

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

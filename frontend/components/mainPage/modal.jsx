import React from 'react'
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePlaylist from './create_playlist'
// import { createPlaylist } from '../../util/playlist_api_util';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component = <CreatePlaylist />;

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

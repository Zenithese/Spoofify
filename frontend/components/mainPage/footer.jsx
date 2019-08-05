import React from 'react';
import { } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlay, faStepForward, faStepBackward, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

// import { connect } from 'react-redux';

class Footer extends React.Component {


    render () {
        return (
            <footer className="footer">
                <div className="footer-left">
                    <span className="currentSong" draggable="true">
                        <img src=""/>
                    </span>
                    <div className="songInfo" draggable="true">
                        <div className="songName">
                            <a href="">Song Name</a>
                        </div>
                        <div className="songArtist" draggable="true">
                            <a href="">Artist Name</a>
                        </div>
                    </div>
                    <button className="likeSong"><FontAwesomeIcon icon={faHeart} /></button>
                </div>

                <div className="footer-center">
                    <div className="controls">
                        <button className="previous"><FontAwesomeIcon icon={faStepBackward} /></button>
                        <button className="playpause"><FontAwesomeIcon className="pp" icon={faPlay}/></button>
                        <button className="forward"><FontAwesomeIcon icon={faStepForward} /></button>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-time">0:00</div>
                        <div className="progress-container">
                            <input className="slider" type="range" min="0" max="99" />
                        </div>
                        <div className="progress-time">6:41</div>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="volume-bar">
                        <div className="progress-container">
                            <button className="volume-mute"><FontAwesomeIcon icon={faVolumeMute} /></button>
                            <input type="range" min="0" max="99" step="1" />
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

// const mapStateToProps = ({ session, entities: { users } }) => {

//     return {
//         currentUser: users[session.id]
//     };
// };

// const mapDispatchToProps = dispatch => ({
//     logout: () => dispatch(logout())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Footer);

export default Footer;
import React, {useState, useEffect} from 'react';
import ContextMenu from '../context_menu/context_menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

export default function Track({ album, name, artist, audio, handleSubmit, handleLike }) {

    const like = handleLike ? <button className="track-like" onClick={handleLike}><FontAwesomeIcon icon={faHeart} /></button> : <div className="track-like">♡</div>

    return (
        <div className="track" onClick={audio} >
            <div className="track-img-container">
                <img className="track-img" src={album}></img>
                <div className="track-status">▶</div>
            </div>
            <div className="track-info-container">
                <div className="track-info-left">
                    <div className="track-title">{name}</div>
                    <div className="track-artist">{artist}</div>
                </div>
                <div className="track-info-right">
                    {like}
                    <div className="track-time">5:50</div>
                    <div className="track-actions" onClick={handleSubmit}>...</div>
                </div>
            </div>
        </div>
    )
}

// &#9616;&#9616; pause symbol
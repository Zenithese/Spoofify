import React, {useState, useEffect} from 'react';
import ContextMenu from '../context_menu/context_menu';

export default function Track({ album, name, artist, audio, handleSubmit, handleLike, likeStyle, songId }) {

    return (
        <div className="track" onDoubleClick={audio} data-contextable={true} data-songid={songId}>
            <div className="track-img-container" data-contextable={true} data-songid={songId}>
                <img className="track-img" src={album} data-contextable={true} data-songid={songId}></img>
                <div className="track-status" data-contextable={true} data-songid={songId}>▶</div>
            </div>
            <div className="track-info-container" data-contextable={true} data-songid={songId}>
                <div className="track-info-left" data-contextable={true} data-songid={songId}>
                    <div className="track-title" data-contextable={true} data-songid={songId}>{name}</div>
                    <div className="track-artist" data-contextable={true} data-songid={songId}>{artist}</div>
                </div>
                <div className="track-info-right" data-contextable={true} data-songid={songId}>
                    <div className={likeStyle ? "track-like" : "track-unliked"} onClick={handleLike} data-contextable={true} data-songid={songId}>{likeStyle ? "♥" : "♡"}</div>
                    <div className="track-time" data-contextable={true} data-songid={songId}>5:50</div>
                    <div className="track-actions" onClick={handleSubmit} data-contextable={true} data-songid={songId}>...</div>
                </div>
            </div>
        </div>
    )
}

// &#9616;&#9616; pause symbol
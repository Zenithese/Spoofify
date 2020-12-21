import React from 'react';

export default function Track({ album, name, artist, handleSubmit, handleLike, likeStyle, songId, onContextMenu, song, recieveCurrentSong, receiveCurrentPlaylist, songs }) {

    const audio = (e, song) => {
        if (e.target.className === "track-actions") return;
        if (e.target.className === "track-like") return;
        if (e.target.className === "track-unliked") return;
        recieveCurrentSong(song);
        receiveCurrentPlaylist(songs);
    }

    return (
        <div className="track" onContextMenu={onContextMenu} onDoubleClick={(e) => audio(e, song)} data-contextable={true} data-songid={songId}>
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
                    <div className="track-time" data-contextable={true} data-songid={songId}>0:30</div>
                    <div className="track-actions" onClick={handleSubmit} data-contextable={true} data-songid={songId}>...</div>
                </div>
            </div>
        </div>
    )
}

// &#9616;&#9616; pause symbol
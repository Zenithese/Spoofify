import React from 'react'

export default function Track({ album, name, artist, audio }) {
    // const track = {
    //     photoUrl: album.images[2].url,
    //     title: name,
    //     artist_name: artist[0].name,
    //     trackUrl: trackUrl
    // }
    return (
        <div className="track" onClick={audio}>
            <div className="track-img-container">
                <img className="track-img" src={album.images[2].url}></img>
                <div className="track-status">▶</div>
            </div>
            <div className="track-info-container">
                <div className="track-info-left">
                    <div className="track-title">{name}</div>
                    <div className="track-artist">{artist[0].name}</div>
                </div>
                <div className="track-info-right">
                    <div className="track-like">♡</div>
                    <div className="track-time">5:50</div>
                    <div className="track-actions">...</div>
                </div>
            </div>
        </div>
    )
}

// &#9616;&#9616; pause symbol
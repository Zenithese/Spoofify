import React, { useState, useEffect } from 'react';
import ContextMenu from './context_menu';

export default function ContextRoot({top, left, directionReveal, parentClassName, display}) {

    const contextMenu = [
        {
            text: "Add to Playlist",
            type: "li with context",
            array: [
                {
                    type: "li",
                    text: "New Playlist"
                },
            ]
        },
    ]

    return (
        <div style={{ "display": display, "position": "absolute", "top": top, "left": left, "flexDirection": "row-reverse" }}>
            <ContextMenu
                parentClassName={parentClassName}
                directionReveal={directionReveal}
                array={contextMenu} />
        </div>
    )
}
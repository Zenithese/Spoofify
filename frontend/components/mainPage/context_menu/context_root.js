import React, { useState, useEffect } from 'react';
import ContextMenu from './context_menu';

export default function ContextRoot({top, left, directionReveal, parentClassName, display}) {

    const contextMenu = [
        {
            text: "Add to Playlist",
            type: "li with context",
            array: [
                {
                    text: "Add to Playlist",
                    type: "li with context",
                    array: [
                        {
                            type: "li",
                            text: "Playlist 2"
                        },
                        {
                            type: "li",
                            text: "Playlist 3"
                        },
                        {
                            type: "li",
                            text: "Playlist 4"
                        }
                    ]
                },
                {
                    text: "Add to Playlist",
                    type: "li with context",
                    array: [
                        {
                            type: "li",
                            text: "Playlist 5"
                        }
                    ]
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
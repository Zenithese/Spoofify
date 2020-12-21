import React from 'react'
import { useState, useEffect } from 'react';
import ContextMenu from './context_menu'

export default function NestedContext({ text, array, parentClassName, openContexts, num, setOpenContexts, update, setUpdate, directionReveal, handleSubmit }) {

    const [className, setClassName] = useState("contextmenu")

    useEffect(() => {
        if (parentClassName === "contextmenu") setClassName("contextmenu")
    }, [parentClassName])

    useEffect(() => {
        if (openContexts[num] === "closed") setClassName("contextmenu")
    }, [update, openContexts, num])

    const onHover = () => {
        setClassName("selector")
        setOpenContexts(array => {
            for (let i = 0; i < array.length; i++) {
                i == num ? array[i] = "open" : array[i] = "closed"
            }
            return array
        })
        setUpdate(!update)
    }

    const onLeave = (e) => {
        if (e.target.className === "contextmenu") return
        setClassName("contextmenu")
        openContexts[num] = "closed"
    }

    return (
        <div className="more-context" onMouseOver={() => onHover()}>
            <div className={className} onMouseOver={() => onHover()} onMouseLeave={(e) => onLeave(e)}>
                <div id="contextmenu-text">{text + " =>"}</div>
            </div>
            <div className="nested-context" >
                <ContextMenu array={array} parentClassName={className} directionReveal={directionReveal} handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}
import React from 'react';
import { useState, useEffect } from 'react';
import NestedContext from './nested_context';

export default function ContextMenu({ array, parentClassName, directionReveal, handleSubmit }) {

    const [openContexts, setOpenContexts] = useState([]);
    const [update, setUpdate] = useState(true);

    let num = 0
    useEffect(() => {
        setOpenContexts(oldArray => [...oldArray, "closed"])
    }, [num])

    const list = array.map((item, i) => {
        const { id, title, type, text, array, style } = item
        if (type === "li with context") {
            num++
            return (
                <NestedContext
                    text={text}
                    array={array}
                    parentClassName={parentClassName}
                    key={i} 
                    openContexts={openContexts}
                    setOpenContexts={setOpenContexts}
                    num={num - 1}
                    update={update}
                    setUpdate={setUpdate}
                    directionReveal={directionReveal}
                    handleSubmit={handleSubmit}
                />
            )
        } else if (style) {
            return (
                <div className="contextmenu" key={i}>
                    <div id={style}>{title}</div>
                </div>
            )
        } else {
            return (
                <div className="contextmenu" key={i} onClick={(e) => handleSubmit(e, id)}>
                    <div id="contextmenu-text">{title}</div>
                </div>
            )
        }
    })

    return (
        <div className={directionReveal}>
            {list}
        </div>
    )
}
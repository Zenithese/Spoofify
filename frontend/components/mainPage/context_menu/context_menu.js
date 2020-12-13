import React from 'react'
import { useState, useEffect } from 'react';
import NestedContext from './nested_context';

export default function ContextMenu({ array, parentClassName, directionReveal }) {

    const [openContexts, setOpenContexts] = useState([]);
    const [update, setUpdate] = useState(true);

    let num = 0
    useEffect(() => {
        setOpenContexts(oldArray => [...oldArray, "closed"])
    }, [num])

    const list = array.map((item, i) => {
        // if (item.type === "hr") return <div style={{"height": "4px"}} key={i}/>
        if (item.type === "li") return <div className="contextmenu" key={i}>{item.text}</div>
        if (item.type === "li with context") {
            num++
            return (
                <NestedContext
                    text={item.text}
                    array={item.array}
                    parentClassName={parentClassName}
                    key={i} openContexts={openContexts}
                    setOpenContexts={setOpenContexts}
                    num={num - 1}
                    update={update}
                    setUpdate={setUpdate}
                    directionReveal={directionReveal} />
            )
        }
    })

    return (
        <div className={directionReveal}>
            {list}
        </div>
    )
}
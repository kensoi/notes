import React, { useEffect, useRef, useState } from "react";


export default function DynamicDiv ({ className, children }) {
    const innerContent = useRef(null);
    const [childHeight, setChildHeight] = useState(0);

    useEffect(()=>{
        setChildHeight(innerContent.current.offsetHeight)
    }, [children])

    return <div className={["dynamic-div", className].join(" ")} style={{maxHeight: childHeight + "px"}}>
        <div ref={innerContent}>{children}</div>
    </div>
}
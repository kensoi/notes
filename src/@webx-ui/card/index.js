import "./stylesheet.scss"

import {
    useToolKit
} from "@webx-ui/toolkit"

function Card () {
    const toolkit = useToolKit()

    const offsetStyle = {
        top: toolkit.app?.card?.offset
    }

    const CardWrapperClassList = ["card-wrapper"]

    if (toolkit.app?.card?.loaded) {
        CardWrapperClassList.push("visible")
    }

    return <div
            className={CardWrapperClassList.join(" ")}
            style={offsetStyle}
    >
        <div className="card-layout">
            {
                toolkit.app?.card?.layout
            }
        </div>
    </div>
}

function CardWrapperBG () {
    const toolkit = useToolKit()

    const classList = ["card-wrapper-bg"]
    
    if (toolkit.app?.card?.loaded) {
        classList.push("visible")
    }

    const clickAction = () => {
        toolkit.app?.card?.hide()
    }

    return <div
            className={classList.join(" ")}
            onClick={clickAction} 
    />
}

export default function CardWrapper () {
    return <>
        <CardWrapperBG />
        <Card />
    </>
}
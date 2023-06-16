import "./stylesheet.scss"

import {
    useToolKit
} from "@web-cross-ui/toolkit"

function Card () {
    const toolkit = useToolKit()

    const offsetStyle = {
        top: toolkit.card.offset
    }

    const CardWrapperClassList = ["card-wrapper"]

    if (toolkit.card.loaded) {
        CardWrapperClassList.push("visible")
    }

    return <div
            className={CardWrapperClassList.join(" ")}
            style={offsetStyle}
    >
        <div className="card-layout">
            {
                toolkit.card.layout
            }
        </div>
    </div>
}

function CardWrapperBG () {
    const toolkit = useToolKit()

    const classList = ["card-wrapper-bg"]
    
    if (toolkit.card.loaded) {
        classList.push("visible")
    }

    const clickAction = () => {
        toolkit.card.return({
            hideReason: "closed by clicking on background wrapper",
          })
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
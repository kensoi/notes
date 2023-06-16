import {
    useState
} from "react"

import {
    nanoid
} from "nanoid"

export function Menu (props) {
    const [state, setState] = useState({
        context: props.context,
    })

    const setContext = (value) => {
        props.setContext(value)

        setState({
            context: value,
        })
    }

    const ContextButton = (item) => {
        var classList = ["x-menu-item"]

        if (state.context === item.context) {
            classList.push("x-menu-selected")
        }
        
        if (item.type) {
            classList.push("svg")
        }

        return (
            <div
                  className={classList.join(" ")}
                  key={nanoid()}
                  onClick={() => {
                      setContext(item.context)
                  }}
            >
                {item.name}
            </div>
        )
    }

    return <div className="x-menu">
        <div className="x-menu-wrapper">
            {props.tumbleConfig.map(ContextButton)}
        </div>
    </div>
        
}

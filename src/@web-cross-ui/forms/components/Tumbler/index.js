import {
    useState
} from "react"

export function Tumbler ({state, setState}) {
    const outerClassList = ["x-tumbler"]
    
    const [
        triggered, setTriggered
    ] = useState(state)

    if (triggered) {
        outerClassList.push("triggered")
    }

    const onToggle = () => {
        setTriggered(!triggered)
        setTimeout(() => {
            setState(!state)
        }, 100)
    }

    return <div
            className={outerClassList.join(" ")}
            onClick={onToggle}
    >
        <div>
            &nbsp;
        </div>
    </div>
}
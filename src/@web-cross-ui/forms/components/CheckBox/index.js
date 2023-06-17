import {
    useState
} from 'react'

import DoneIcon from '@mui/icons-material/Done'

export function CheckBox ({
    state, setState, 
    children, title, 
    xstyle
}) {
    const [
        triggered,
        setTriggered
    ] = useState(state)

    const outerClassList = ["x-check-box"]

    if (triggered) {
        outerClassList.push("marked")
    }

    const onToggle = () => {
        setTriggered(!triggered)
        setTimeout(() => {
            setState(!state)
        }, 100)
    }

    const Icon = () => {
        return <div 
                className="x-check-box-element x-check-box-icon"
                onClick={onToggle}
        >
            <DoneIcon />
        </div>
    }

    const Title = () => {
        if (title || children) {
            return <div className="x-check-box-element x-check-box-title">
                {title || children}
            </div>
        }
    }

    return <div 
            className={outerClassList.join(" ")} 
            style={xstyle}
    >
        <Icon />
        <Title />
    </div>
}
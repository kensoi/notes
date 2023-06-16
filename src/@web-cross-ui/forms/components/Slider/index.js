import {
    useState
} from "react"

export function handleChange(
    setState
) {
    return event => setState(event.target.value)
}

export function Slider (props) {
    const [state, setState] = useState({
        value: props.min,
    })

    const setValue = (value) => {
        if (props.min <= value && value <= props.max) {
            props.setValue(value)
            
            setState({
                value: value,
            })
        }
    }

    const Input = () => {
        return <div className="x-slider-input">
            <input
                type="range"
                min={props.min}
                max={props.max}
                value={state.value}
                onChange={handleChange(setValue)}
            />
        </div>
    }

    const Output = () => {
        return <div className="x-slider-output">
            {state.value}
        </div>
    }

    return <div className="x-slider">
        <Input />
        <Output />
    </div>
}
import {
    useRef, 
    useState
} from "react"

import ClearIcon from "@mui/icons-material/Clear";

export function TextField ({
    icon, currency, className, placeholder,
    field, setField
}) {
    const TextField = useRef()

    const [focus, setFocus] = useState(false)
    // eslint-disable-next-line
    const [inputField, _setInputField] = useState(field)
    const [valueCheckMark, setValueCheckMark] = useState(field)

    // methods

    const focusOn = () => {
        TextField.current?.focus()
    }
    const focusOff = () => {
        TextField.current?.blur()
    }
    
    const onInput = event => {
        setValueCheckMark(event.target.innerHTML)
    }

    const onFocus = () => {
        setFocus(true)
    }
    
    const onBlur = () => {
        setField(valueCheckMark)
        setFocus(false)
    }

    const clearInput = () => {
        TextField.current.innerHTML = ""
        setValueCheckMark("")
    }

    // components

    const Icon = () => {
        if (icon) {
            return <div className="x-text-field-icon">
                {
                    icon
                }
            </div>
        }
    }

    const Input = () => {
        const inputPlaceholder = currency ? `${placeholder} (${currency})` : placeholder
        return <div 
                className="x-text-field-input"
                ref={TextField}
                onFocus={onFocus}
                onBlur={onBlur}
                contentEditable="true"
                suppressContentEditableWarning={true}
                onInput={onInput}
                data-placeholder={inputPlaceholder}
        >
            {
                inputField
            }
        </div>
    }

    const InputCurrency = () => {
        if (currency && valueCheckMark !== "") {
            return <div className="x-text-field-currency">
                {
                    currency
                }
            </div>
        }
    }

    const ClearButton = () => {
        if (valueCheckMark !== "") {
            return <div 
                    className="x-text-field-icon x-text-field-clear-button"
                    onClick={clearInput}
            >
                <ClearIcon />
            </div>
        }
    }

    const classList = []

    classList.push("x-text-field")

    if (icon) {
        classList.push("with-icon")
    }

    if (valueCheckMark !== "") {
        classList.push("with-clear-button")

        if (currency) {
            classList.push("with-currency")
        }
    }

    if (focus) {
        classList.push("focused")
    }

    if (className) {
        classList.push(className)
    }

    // useEffect(()=>{}, [icon, valueCheckMark, currency, focus])

    const FieldClassName = classList.join(" ")
    
    return <div 
            className={FieldClassName} 
            onClick={focusOn}
            onMouseLeave={focusOff}
    >
        <Icon />
        {Input()}
        <InputCurrency />
        <ClearButton />
    </div>
}
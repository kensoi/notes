import {
    useState
} from 'react'

export function CheckValue(
    value, defaultOption, notDefaultOption
) {
    switch (value) {
        case defaultOption:
            return defaultOption
    
        default:
            return notDefaultOption
    }
}

export function Dropdown ({
    children, dropdown, 
    openOnClick=true, closeOnClick=true,
    openOnEnter=false, closeOnHover=true,
    contentPosition="bottom-right", listDirection="column"
}) {
    const [isVisible, setVisible] = useState (false)

    const closeAction = () => {
        setVisible(false)
    }

    const openAction = () => {
        setVisible(true)
    }

    const toggleClick = () => {
        if (isVisible) {
            if (openOnClick) {
                closeAction()
            }
        }
        else {
            if (closeOnClick) {
                openAction()
            }
        }
    }

    const onEnter = () => {
        if (openOnEnter) {
            openAction()
        }
    }

    const onLeave = () => {
        if (closeOnHover) {
            closeAction()
        }
    }

    const DropdownContent = () => {
        const wrapperClassList = ["x-dropdown-wrapper"]
        const contentClassList = ["x-dropdown-content"]

        switch (contentPosition) {
            case "left-top":
                wrapperClassList.push("x-dropdown-pose-at-left-top")
                break

            case "left-bottom":
                wrapperClassList.push("x-dropdown-pose-at-left-bottom")
                break

            case "right-top":
                wrapperClassList.push("x-dropdown-pose-at-right-top")
                break

            case "right-bottom":
                wrapperClassList.push("x-dropdown-pose-at-right-bottom")
                break

            case "top-left":
                wrapperClassList.push("x-dropdown-pose-at-top-left")
                break

            case "top-right":
                wrapperClassList.push("x-dropdown-pose-at-top-right")
                break

            case "bottom-left":
                wrapperClassList.push("x-dropdown-pose-at-bottom-left")
                break

            default:
                wrapperClassList.push("x-dropdown-pose-at-bottom-right")
        }

        const direction = CheckValue(listDirection, "row", "column")
        
        contentClassList.push(
          `direction-${direction}`
        )
        
        if (isVisible) {
            wrapperClassList.push("visible")
        }

        return <div className={wrapperClassList.join(" ")}>
            <div className={contentClassList.join(" ")}>
                {dropdown}
            </div>
        </div>
    }

    const DropdownChildren = () => {
        const buttonClassList = ["x-dropdown-children"]

        return <div
                className={buttonClassList.join(" ")}
                onClick={toggleClick}
        >
            {children}
        </div>
    }

    const dropdownClassList = ["x-dropdown"]

    return <div className={dropdownClassList.join(" ")} 
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
    >
        <DropdownChildren />
        {DropdownContent()}
    </div>
}

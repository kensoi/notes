import {
    nanoid
} from "nanoid"

import {
    ButtonBlock,
    Button,
    Dropdown
} from "@web-cross-ui/forms"

import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    LightModeIcon, 
    NightlightIcon, 
    AutoAwesomeIcon,
    // TuneIcon
} from "icons/schemas"

export default function ColorSchemaChanger (props) {
    const toolkit = useToolKit()

    const schemas = [
        {
            schemaName: "light",
            icon: <LightModeIcon />,
            title: "Светлая",
        },
        {
            schemaName: "dark",
            icon: <NightlightIcon />,
            title: "Тёмная",
        },
        {
            schemaName: "auto",
            icon: <AutoAwesomeIcon />,
            title: "Системная",
        },
        // {
        //     schemaName: "",
        //     icon: <TuneIcon />,
        //     title: "Название схемы",
        // },
    ]

    const getSchemaButton = (item) => {
        const icon = item["icon"]
        const title = item["title"]
        const ID = nanoid()

        if (item["x-dropdown"] !== undefined) {
            const dropdownContent = getDropdownContent(item["x-dropdown"])
            const contentPosition = props.contentPosition || "bottom-left"

            return <Dropdown
                    key={ID}
                    dropdown={dropdownContent}
                    contentPosition={contentPosition}
            >
                <Button 
                        theme="transparent"
                        icon={icon}
                        title={title}
                />
            </Dropdown>
        }
        else {
            const action = () => {
                toolkit.settings.colorSchema = item.schemaName
            }

            return <Button 
                    theme="transparent"
                    key={ID}
                    icon={icon}
                    onClick={action} 
                    title={title}
            />
        }
    }

    const getDropdownContent = (dropdown) => {
        return <ButtonBlock>
            {
                dropdown.map(getSchemaButton)
            }
        </ButtonBlock>
    }

    const actualSchema = schemas.filter(item => item.schemaName === toolkit.settings.colorSchema)[0] || "auto"
    const actualSchemaIcon = actualSchema.icon
    const actualSchemaTitle = actualSchema.title
    const dropdownContent = getDropdownContent(schemas)

    return <Dropdown
                dropdown={dropdownContent}
                contentPosition={props.contentPosition || "bottom-right"}
                listDirection="row"
        >
            <Button 
                    theme="white" 
                    icon={actualSchemaIcon} 
                    title={actualSchemaTitle} 
                    isDropdown={true}
            />
        </Dropdown>
}

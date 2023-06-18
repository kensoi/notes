import {
    nanoid
} from "nanoid"

import {
    ButtonBlock,
    Button,
    Dropdown
} from "@webx-ui/forms"

import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    LightModeIcon, 
    NightlightIcon, 
    AutoAwesomeIcon,
    // TuneIcon
} from "icons/settings/themes"

const themes = [
    {
        name: "auto",
        icon: <AutoAwesomeIcon />,
        title: "Системная",
    },
    {
        name: "light",
        icon: <LightModeIcon />,
        title: "Светлая",
    },
    {
        name: "dark",
        icon: <NightlightIcon />,
        title: "Тёмная",
    },
]

function ThemeButton({ theme }) {
    const toolkit = useToolKit()

    function onClick() {
        toolkit.app.theme = theme.name
    }

    return <Button
        theme="transparent"
        icon={theme.icon}
        title={theme.title}
        onClick={onClick}
    />
}

function ThemeButtonList() {
    return <ButtonBlock>
        { themes.map(
            item => <ThemeButton key={nanoid()} theme={item} />
        ) }
    </ButtonBlock>
}

export default function Theme () {
    const toolkit = useToolKit()

    const actualThemeIndex = themes.findIndex(item => item.name === toolkit.app.theme)
    const actualTheme = themes[~actualThemeIndex ? actualThemeIndex : 0]

    return <Dropdown
                dropdown={<ThemeButtonList />}
                contentPosition="bottom-right"
                listDirection="row"
        >
            <Button 
                    theme="white" 
                    icon={actualTheme.icon} 
                    title={actualTheme.title} 
                    isDropdown={true}
            />
        </Dropdown>
}

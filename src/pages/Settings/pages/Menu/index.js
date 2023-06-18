import {
    ButtonBlock
} from "@webx-ui/forms"

import {
    SettingsIcon,
    InfoIcon, 
    ContrastIcon, 
    PersonIcon
} from "icons/settings/menu"

import Header from "./Header"
import MenuButton from "./MenuButton"

export default function Menu() {
    return <div className="settings-menu">
        <Header />
        <ButtonBlock className="settings-block">
            <MenuButton 
                    icon={<ContrastIcon/>}
                    title="Основные" 
                    page={1}
            />
            <MenuButton
                    icon={<SettingsIcon/>}
                    title="Дополнительное"
                    page={4}
            />
        </ButtonBlock>
        <ButtonBlock className="settings-block">
            <MenuButton 
                    icon={<InfoIcon/>} 
                    title="О программе" 
                    page={2}
            />
            <MenuButton 
                    icon={<PersonIcon/>} 
                    title="Разработчик" 
                    page={3}
            />
        </ButtonBlock>
    </div>
}

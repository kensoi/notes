import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    Button
} from "@web-cross-ui/forms"

import {
    ArrowBackIcon
} from "icons/settings/menu/header"

export default function Header() {
    const toolkit = useToolKit()

    const buttonAction = () => {
        toolkit.app.goTo(toolkit.app.path)
    }

    return <div className="settings-headline settings-block">
        <Button
            theme="transparent" icon={<ArrowBackIcon />}
            onClick={buttonAction} />
        Настройки
    </div>
}

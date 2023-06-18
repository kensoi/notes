import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    Button
} from "@webx-ui/forms"

import {
    SettingsIcon
} from "icons/settings/menu"

export default function SettingsButton() {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.app.goTo(toolkit.app.path + "/settings/")
    }

    return <Button
        icon={<SettingsIcon />}
        className="settings-button"
        theme="white"
        onClick={onClick}
    />
}

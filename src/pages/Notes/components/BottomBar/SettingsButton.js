import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    Button
} from "@web-cross-ui/forms"

import SettingsIcon from "@mui/icons-material/Settings"

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

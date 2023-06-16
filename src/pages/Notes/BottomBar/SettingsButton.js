import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    Button
} from "@web-cross-ui/forms"

export default function SettingsButton() {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.app.goTo(toolkit.app.path + "/settings/")
    }

    return <Button
        icon={<SettingsIcon />}
        theme="transparent"
        onClick={onClick}
    />
}

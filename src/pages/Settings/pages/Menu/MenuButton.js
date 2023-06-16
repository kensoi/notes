import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    Button
} from "@web-cross-ui/forms"

export default function MenuButton({
    icon, title, page
}) {
    const toolkit = useToolKit()

    const menuAction = () => {
        toolkit.pages.settings.number = page
    }

    return <Button
        theme="transparent"
        icon={icon}
        style={{ width: "100%" }}
        title={title}
        onClick={menuAction} />
}

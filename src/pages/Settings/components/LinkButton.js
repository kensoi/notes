import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    Button
} from "@webx-ui/forms"

export default function LinkButton({ title, children, link }) {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.app.goTo(link)
    }

    return <Button
        theme="white"
        title={title || children}
        onClick={onClick} />
}

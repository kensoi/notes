import {
    useToolKit
} from "@web-cross-ui/toolkit"

import {
    Button
} from "@web-cross-ui/forms"

import {
    ArrowDropUpIcon
} from "icons/notes/editor/document"

export default function MoveUp({ index }) {
    const toolkit = useToolKit()

    const onClick = () => {
        toolkit.notes.items.moveUp(index)
    };

    return <Button
            theme="white"
            onClick={onClick}
            icon={<ArrowDropUpIcon />}
    />
}
